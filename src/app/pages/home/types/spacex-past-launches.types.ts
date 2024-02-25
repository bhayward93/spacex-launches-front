export type PastLaunchResponseItem = {
    name: string;
    success: boolean;
    flight_number: number;
    timestamp: number;
    links: {
        webcast_url: string,
        article_url: string,
        wikipedia_url: string
    },
    failures?: {
        time?: number;
        altitude?: number;
        reason: string;
    }[]
};

export type PastLaunch = {
    name: string;
    success: boolean;
    flightNumber: number;
    failures?: LaunchFailure[],
    timestamp: number;
    links: LaunchLinks
};

export type LaunchFailure = {
    time?: number;
    altitude?: number;
    reason: string;
};

export type LaunchLinks = {
    webcastUrl: string,
    articleUrl: string,
    wikipediaUrl: string
};