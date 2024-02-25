import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, catchError, map, shareReplay } from "rxjs";
import { PastLaunch, PastLaunchResponseItem } from "../types/spacex-past-launches.types";
import { API_BASE_URL } from "../../../tokens/api-base-url.token";

/**
 * Service for fetching SpaceX past launches.
 */
@Injectable({providedIn: 'root'})
export class SpaceXPastLaunchesService {
    /**
     * Endpoint for launch history - with any further development, a wrapper should be build that supplies 
     * this base URL by default to the HttpClient, and the URL should be dynamic depending on the environment.
     */
    private readonly launchHistoryEndpoint: string = `${this.apiBaseUrl}/api/v1/launches/past`;

    /** Launch history observable. */
    public readonly launchHistory$: Observable<PastLaunch[]> = this.httpClient.get<PastLaunchResponseItem[]>(
        this.launchHistoryEndpoint
    ).pipe(
        // map to model.
        map((response: PastLaunchResponseItem[]): PastLaunch[] => {
            return this.mapResponseItemsToModels(response);
        }),
        // handle errors.
        catchError((error) => {
            console.error('Error fetching SpaceX past launches', error);
            return [];
        }),
        // prevent multiple requests from multiple subscriptions.
        shareReplay(),
    );

    constructor(
        private readonly httpClient: HttpClient,
        @Inject(API_BASE_URL) private readonly apiBaseUrl: string
    ) {
    }

    /**
     * Map response items to PastLaunch models.
     * @param { PastLaunchResponseItem[] } responseItems - items from server.
     * @returns { PastLaunch[] } - mapped models.
     */
    private mapResponseItemsToModels(responseItems: PastLaunchResponseItem[]): PastLaunch[] {
        return responseItems.map((responseItem: PastLaunchResponseItem): PastLaunch => ({
            name: responseItem.name,
            success: responseItem.success,
            flightNumber: responseItem.flight_number,
            failures: responseItem.failures ?? [],
            timestamp: responseItem.timestamp,
            links: {
                webcastUrl: responseItem.links.webcast_url,
                articleUrl: responseItem.links.article_url,
                wikipediaUrl: responseItem.links.wikipedia_url
            }
        }))
    }
}