import { Component } from '@angular/core';

@Component({
  selector: 'app-noise-filter-card',
  standalone: true,
  imports: [],
  template: `
    <div class="relative z-10 mx-auto max-w-xl rounded-lg bg-white/30 p-12 shadow-lg backdrop-blur-lg">
      <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 h-full w-full opacity-5">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="6" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilter)" />
      </svg>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ``,
})
export class NoiseFilterCardComponent {}
