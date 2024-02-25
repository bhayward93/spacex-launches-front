import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

/**
 * Topbar component.
 */
@Component({
  selector: 'topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  constructor(
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  /**
   * Scroll to the top of the page. Uses injected document so as not to break SSR
   * if this ever ends up called in the flow of rendering.
   * @returns { void }
   */
  protected scrollToTop(): void {
    this.document.defaultView?.scrollTo({top: 0, behavior: 'smooth'});
  }
}
