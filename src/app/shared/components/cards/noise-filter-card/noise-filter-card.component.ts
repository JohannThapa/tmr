import { Component } from '@angular/core';

@Component({
  selector: 'app-noise-filter-card',
  standalone: true,
  imports: [],
  template: `
    <div class="relative z-10 max-w-xl p-12 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg mx-auto">
      <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full opacity-5">
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
