import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: '[tmr-bg-a1]',
  imports: [],
  template: `
    <div class="absolute inset-0 z-0 overflow-hidden bg-transparent">
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 h-full w-full opacity-30 mix-blend-soft-light">
        <filter id="noiseFilterBg">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilterBg)" />
      </svg>
      <div class="relative h-full w-full blur-3xl">
        <div class="g1 animate-move-vertical absolute left-1/2 top-1/2 h-[80%] w-[80%] bg-radial"></div>
        <div class="g2 animate-move-circle reverse absolute left-1/2 top-1/2 h-[80%] w-[80%] bg-radial"></div>
        <div class="g3 animate-move-circle absolute left-1/2 top-[calc(50%+200px)] h-[80%] w-[80%] bg-radial"></div>
        <div class="g4 animate-move-horizontal absolute left-1/2 top-1/2 h-[80%] w-[80%] bg-radial"></div>
        <div class="g5 animate-move-circle absolute left-1/2 top-1/2 h-[calc(80%*2)] w-[calc(80%*2)] bg-radial"></div>
        <div class="interactive absolute left-[-50%] top-[-50%] h-full w-full bg-radial mix-blend-hard-light"></div>
      </div>
    </div>
    <ng-content></ng-content>
  `,
  styleUrl: './bg-a1.component.scss',
})
export class BgA1Component implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const interBubble = document.querySelector('.interactive') as HTMLElement;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }
}
