import { Component } from '@angular/core';
import { SpaceXPastLaunchesService } from './services/spacex-past-launches.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PastLaunch } from './types/spacex-past-launches.types';
import { PastLaunchCardComponent } from '../../components/past-launch-card/past-launch-card.component';

/**
 * Root home screen.
 */
@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PastLaunchCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /** Observable containing launch history. */
  protected readonly launchHistory$: Observable<PastLaunch[]> = this.spaceXPastLaunchesService.launchHistory$;
  
  constructor(
    private readonly spaceXPastLaunchesService: SpaceXPastLaunchesService
  ) {}
}
