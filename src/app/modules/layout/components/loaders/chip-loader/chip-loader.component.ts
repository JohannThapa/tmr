import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tmr-chip-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-75">
      <svg
        class="microchip"
        viewBox="0 0 128 128"
        width="128px"
        height="128px"
        role="img"
        aria-label="A square pops in emitting waves and lines, and sparks run through the lines">
        <symbol id="dot-1">
          <circle r="3" cx="3" cy="38" />
        </symbol>
        <symbol id="dot-2">
          <circle r="3" cx="3" cy="54" />
        </symbol>
        <symbol id="dot-3">
          <circle r="3" cx="3" cy="70" />
        </symbol>
        <symbol id="dot-4">
          <circle r="3" cx="3" cy="3" />
        </symbol>
        <symbol id="dot-5">
          <circle r="3" cx="20" cy="3" />
        </symbol>
        <symbol id="dot-6">
          <circle r="3" cx="3" cy="30" />
        </symbol>
        <symbol id="dot-7">
          <circle r="3" cx="37" cy="3" />
        </symbol>
        <symbol id="dot-8">
          <circle r="3" cx="54" cy="3" />
        </symbol>
        <symbol id="dot-9">
          <circle r="3" cx="71" cy="3" />
        </symbol>
        <symbol id="line-1">
          <polyline points="12 54,12 46,3 46,3 38" stroke-dasharray="42 42" />
        </symbol>
        <symbol id="line-2">
          <polyline points="29 54,3 54" stroke-dasharray="42 42" />
        </symbol>
        <symbol id="line-3">
          <polyline points="12 54,12 62,3 62,3 70" stroke-dasharray="42 42" />
        </symbol>
        <symbol id="line-4">
          <polyline points="28 20,28 12,20 12,20 3" stroke-dasharray="60 60" />
        </symbol>
        <symbol id="line-5">
          <polyline points="37 29,37 20,3 20,3 3" stroke-dasharray="60 60" />
        </symbol>
        <symbol id="line-6">
          <polyline points="15 20,15 30,3 30" stroke-dasharray="60 60" />
        </symbol>
        <symbol id="line-7">
          <polyline points="54 12,37 12,37 3" stroke-dasharray="43 43" />
        </symbol>
        <symbol id="line-8">
          <polyline points="54 29,54 3" stroke-dasharray="43 43" />
        </symbol>
        <symbol id="line-9">
          <polyline points="54 12,71 12,71 3" stroke-dasharray="43 43" />
        </symbol>
        <symbol id="spark-1">
          <polyline points="12 54,12 46,3 46,3 38" stroke-dasharray="15 69" />
        </symbol>
        <symbol id="spark-2">
          <polyline points="29 54,3 54" stroke-dasharray="15 69" />
        </symbol>
        <symbol id="spark-3">
          <polyline points="12 54,12 62,3 62,3 70" stroke-dasharray="15 69" />
        </symbol>
        <symbol id="spark-4">
          <polyline points="28 20,28 12,20 12,20 3" stroke-dasharray="15 105" />
        </symbol>
        <symbol id="spark-5">
          <polyline points="37 29,37 20,3 20,3 3" stroke-dasharray="15 105" />
        </symbol>
        <symbol id="spark-6">
          <polyline points="15 20,15 30,3 30" stroke-dasharray="15 105" />
        </symbol>
        <symbol id="spark-7">
          <polyline points="54 12,37 12,37 3" stroke-dasharray="15 71" />
        </symbol>
        <symbol id="spark-8">
          <polyline points="54 29,54 3" stroke-dasharray="15 71" />
        </symbol>
        <symbol id="spark-9">
          <polyline points="54 12,71 12,71 3" stroke-dasharray="15 71" />
        </symbol>
        <symbol id="wave">
          <rect x="3" y="3" rx="2.5" ry="2.5" width="44" height="44" />
        </symbol>
        <g transform="translate(10,10)">
          <g class="microchip__lines" stroke-linecap="round" stroke-linejoin="round">
            <g>
              <g fill="none" stroke="currentcolor">
                <use class="microchip__line microchip__line--1" href="#line-1" />
                <use class="microchip__spark microchip__spark--1" href="#spark-1" />
                <use class="microchip__line microchip__line--2" href="#line-2" />
                <use class="microchip__spark microchip__spark--2" href="#spark-2" />
                <use class="microchip__line microchip__line--3" href="#line-3" />
                <use class="microchip__spark microchip__spark--3" href="#spark-3" />
              </g>
              <g fill="currentcolor">
                <use class="microchip__dot microchip__dot--1" href="#dot-1" />
                <use class="microchip__dot microchip__dot--2" href="#dot-2" />
                <use class="microchip__dot microchip__dot--3" href="#dot-3" />
              </g>
            </g>
            <g>
              <g fill="none" stroke="currentcolor">
                <use class="microchip__line microchip__line--4" href="#line-4" />
                <use class="microchip__spark microchip__spark--4" href="#spark-4" />
                <use class="microchip__line microchip__line--5" href="#line-5" />
                <use class="microchip__spark microchip__spark--5" href="#spark-5" />
                <use class="microchip__line microchip__line--6" href="#line-6" />
                <use class="microchip__spark microchip__spark--6" href="#spark-6" />
              </g>
              <g fill="currentcolor">
                <use class="microchip__dot microchip__dot--4" href="#dot-4" />
                <use class="microchip__dot microchip__dot--5" href="#dot-5" />
                <use class="microchip__dot microchip__dot--6" href="#dot-6" />
              </g>
            </g>
            <g>
              <g fill="none" stroke="currentcolor">
                <use class="microchip__line microchip__line--7" href="#line-7" />
                <use class="microchip__spark microchip__spark--7" href="#spark-7" />
                <use class="microchip__line microchip__line--8" href="#line-8" />
                <use class="microchip__spark microchip__spark--8" href="#spark-8" />
                <use class="microchip__line microchip__line--9" href="#line-9" />
                <use class="microchip__spark microchip__spark--9" href="#spark-9" />
              </g>
              <g fill="currentcolor">
                <use class="microchip__dot microchip__dot--7" href="#dot-7" />
                <use class="microchip__dot microchip__dot--8" href="#dot-8" />
                <use class="microchip__dot microchip__dot--9" href="#dot-9" />
              </g>
            </g>
            <g transform="translate(108,0) scale(-1,1)">
              <g fill="none" stroke="currentcolor">
                <use class="microchip__line microchip__line--4" href="#line-4" />
                <use class="microchip__spark microchip__spark--4" href="#spark-4" />
                <use class="microchip__line microchip__line--5" href="#line-5" />
                <use class="microchip__spark microchip__spark--5" href="#spark-5" />
                <use class="microchip__line microchip__line--6" href="#line-6" />
                <use class="microchip__spark microchip__spark--6" href="#spark-6" />
              </g>
              <g fill="currentcolor">
                <use class="microchip__dot microchip__dot--4" href="#dot-4" />
                <use class="microchip__dot microchip__dot--5" href="#dot-5" />
                <use class="microchip__dot microchip__dot--6" href="#dot-6" />
              </g>
            </g>
            <g transform="translate(108,0) scale(-1,1)">
              <g fill="none" stroke="currentcolor">
                <use class="microchip__line microchip__line--1" href="#line-1" />
                <use class="microchip__spark microchip__spark--1" href="#spark-1" />
                <use class="microchip__line microchip__line--2" href="#line-2" />
                <use class="microchip__spark microchip__spark--2" href="#spark-2" />
                <use class="microchip__line microchip__line--3" href="#line-3" />
                <use class="microchip__spark microchip__spark--3" href="#spark-3" />
              </g>
              <g fill="currentcolor">
                <use class="microchip__dot microchip__dot--1" href="#dot-1" />
                <use class="microchip__dot microchip__dot--2" href="#dot-2" />
                <use class="microchip__dot microchip__dot--3" href="#dot-3" />
              </g>
            </g>
            <g transform="translate(108,108) scale(-1,-1)">
              <g fill="none" stroke="currentcolor">
                <use class="microchip__line microchip__line--4" href="#line-4" />
                <use class="microchip__spark microchip__spark--4" href="#spark-4" />
                <use class="microchip__line microchip__line--5" href="#line-5" />
                <use class="microchip__spark microchip__spark--5" href="#spark-5" />
                <use class="microchip__line microchip__line--6" href="#line-6" />
                <use class="microchip__spark microchip__spark--6" href="#spark-6" />
              </g>
              <g fill="currentcolor">
                <use class="microchip__dot microchip__dot--4" href="#dot-4" />
                <use class="microchip__dot microchip__dot--5" href="#dot-5" />
                <use class="microchip__dot microchip__dot--6" href="#dot-6" />
              </g>
            </g>
            <g transform="translate(0,108) scale(1,-1)">
              <g fill="none" stroke="currentcolor">
                <use class="microchip__line microchip__line--7" href="#line-7" />
                <use class="microchip__spark microchip__spark--7" href="#spark-7" />
                <use class="microchip__line microchip__line--8" href="#line-8" />
                <use class="microchip__spark microchip__spark--8" href="#spark-8" />
                <use class="microchip__line microchip__line--9" href="#line-9" />
                <use class="microchip__spark microchip__spark--9" href="#spark-9" />
              </g>
              <g fill="currentcolor">
                <use class="microchip__dot microchip__dot--7" href="#dot-7" />
                <use class="microchip__dot microchip__dot--8" href="#dot-8" />
                <use class="microchip__dot microchip__dot--9" href="#dot-9" />
              </g>
            </g>
            <g transform="translate(0,108) scale(1,-1)">
              <g fill="none" stroke="currentcolor">
                <use class="microchip__line microchip__line--4" href="#line-4" />
                <use class="microchip__spark microchip__spark--4" href="#spark-4" />
                <use class="microchip__line microchip__line--5" href="#line-5" />
                <use class="microchip__spark microchip__spark--5" href="#spark-5" />
                <use class="microchip__line microchip__line--6" href="#line-6" />
                <use class="microchip__spark microchip__spark--6" href="#spark-6" />
              </g>
              <g fill="currentcolor">
                <use class="microchip__dot microchip__dot--4" href="#dot-4" />
                <use class="microchip__dot microchip__dot--5" href="#dot-5" />
                <use class="microchip__dot microchip__dot--6" href="#dot-6" />
              </g>
            </g>
          </g>
          <g transform="translate(29,29)">
            <g class="microchip__center">
              <g fill="none" stroke="currentcolor" stroke-width="6">
                <use class="microchip__wave microchip__wave--1" href="#wave" />
                <use class="microchip__wave microchip__wave--2" href="#wave" />
              </g>
              <rect class="microchip__core" fill="currentcolor" rx="5" ry="5" width="50" height="50" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  `,
  styleUrl: './chip-loader.component.scss',
})
export class ChipLoaderComponent {}
