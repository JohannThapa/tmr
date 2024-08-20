import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: '[tmr-bg-a1]',
  standalone: true,
  imports: [],
  template: `
    <div class="absolute inset-0 overflow-hidden bg-card z-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full opacity-30 mix-blend-soft-light">
        <filter id="noiseFilterBg">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilterBg)" />
      </svg>
      <div class="relative w-full h-full blur-3xl">
        <div class="g1 absolute bg-radial w-[80%] h-[80%] left-1/2 top-1/2 animate-move-vertical"></div>
        <div class="g2 absolute bg-radial w-[80%] h-[80%] left-1/2 top-1/2 animate-move-circle reverse"></div>
        <div class="g3 absolute bg-radial w-[80%] h-[80%] left-1/2 top-[calc(50%+200px)] animate-move-circle"></div>
        <div class="g4 absolute bg-radial w-[80%] h-[80%] left-1/2 top-1/2 animate-move-horizontal"></div>
        <div class="g5 absolute bg-radial w-[calc(80%*2)] h-[calc(80%*2)] left-1/2 top-1/2 animate-move-circle"></div>
        <div class="interactive absolute bg-radial w-full h-full top-[-50%] left-[-50%] mix-blend-hard-light"></div>
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
