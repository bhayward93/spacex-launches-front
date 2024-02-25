import { Component, Input } from '@angular/core';
import { LaunchFailure, LaunchLinks } from '../../pages/home/types/spacex-past-launches.types';
import { DatePipe, NgClass } from '@angular/common';

/**
 * Card for displaying past launches.
 */
@Component({
  selector: 'past-launch-card',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './past-launch-card.component.html',
  styleUrl: './past-launch-card.component.scss'
})
export class PastLaunchCardComponent {
  /** Name of the rocket. */
  @Input() public name: string|undefined;

  /** Whether the launch was a success. */
  @Input() public success: boolean|undefined;

  /** Flight number of the launch. */
  @Input() public flightNumber: number|undefined;

  /** Launch failures */
  @Input() public failures: LaunchFailure[]|undefined;

  /** Timestamp of the launch. */
  @Input() public timestamp: number|undefined;

  /** Links to the launch articles and media. */
  @Input() public links: LaunchLinks|undefined;
}
