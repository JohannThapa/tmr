import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
  HostListener,
  NgZone,
  Renderer2,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cursor-creature',
  templateUrl: './cursor-creature.component.html',
  styleUrls: ['./cursor-creature.component.scss'],
  standalone: true,
})
export class CursorCreatureComponent implements AfterViewInit, OnDestroy {
  @ViewChild('creatureWrapper') creatureWrapper!: ElementRef;
  @ViewChild('creature') creatureEl!: ElementRef;

  private viewport = { w: 0, h: 0 };
  private cursor = { x: 0, y: 0 };
  private readonly rows = 13;
  private particles: HTMLDivElement[] = [];
  private animationFrameId: number | null = null;
  private lastUpdate = 0;
  private lastMove = 0;
  private isAutoMoving = true;
  private particleStates: {
    currentX: number;
    currentY: number;
    targetX: number;
    targetY: number;
    delay: number;
    duration: number;
    lastUpdate: number;
  }[] = [];

  private center: { x: number; y: number } = { x: 0, y: 0 };
  private centerDistances: number[] = [];
  private maxDistance: number = 0;

  constructor(private ngZone: NgZone, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initializeAnimation();
    window.addEventListener('resize', this.updateViewport.bind(this));
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private initializeAnimation(): void {
    this.updateViewport();
    this.createParticles();
    this.setupInitialStyles();
    this.setupAnimationLoop();
    this.setupAutoMove();
  }

  private updateViewport(): void {
    this.viewport = {
      w: window.innerWidth * 0.5,
      h: window.innerHeight * 0.5,
    };
    this.center = { x: this.viewport.w, y: this.viewport.h };
  }

  private createParticles(): void {
    this.particles.forEach((p) => p.remove());
    this.particles = [];
    this.particleStates = [];
    this.centerDistances = [];

    const gridSize = this.rows * this.rows;
    const center = (this.rows - 1) / 2;
    this.maxDistance = Math.sqrt(2 * Math.pow(center, 2));

    for (let i = 0; i < gridSize; i++) {
      const div = this.renderer.createElement('div');
      this.renderer.appendChild(this.creatureEl.nativeElement, div);
      this.particles.push(div);

      const row = Math.floor(i / this.rows);
      const col = i % this.rows;
      const distance = Math.sqrt(Math.pow(row - center, 2) + Math.pow(col - center, 2));
      this.centerDistances.push(distance);

      const ratio = distance / this.maxDistance;
      const delay = ratio * 40;
      const duration = 120 + ratio * 630;

      this.particleStates.push({
        currentX: 0,
        currentY: 0,
        targetX: 0,
        targetY: 0,
        delay,
        duration,
        lastUpdate: 0,
      });
    }
  }

  private setupInitialStyles(): void {
    this.renderer.setStyle(this.creatureEl.nativeElement, 'width', `${this.rows * 10}em`);

    this.renderer.setStyle(this.creatureEl.nativeElement, 'height', `${this.rows * 10}em`);

    this.particles.forEach((particle, index) => {
      const distance = this.centerDistances[index];
      const ratio = distance / this.maxDistance;

      const scale = 2 + 3 * ratio;
      const opacity = 1 - 0.9 * ratio;
      const lightness = 80 - 60 * ratio;
      const shadow = 8 - 7 * ratio;
      const zIndex = Math.round(this.rows * this.rows - distance * 10);

      particle.style.transform = `scale(${scale})`;
      particle.style.opacity = `${opacity}`;
      particle.style.background = `hsl(4, 70%, ${lightness}%)`;
      particle.style.boxShadow = `0px 0px ${Math.round(shadow)}em 0px #ff0000`;
      particle.style.zIndex = `${zIndex}`;
    });
  }

  private setupAnimationLoop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.lastUpdate = performance.now();
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    });
  }

  private animate(currentTime: number): void {
    const deltaTime = currentTime - this.lastUpdate;
    this.lastUpdate = currentTime;

    // Update auto-move every frame
    if (this.isAutoMoving) {
      this.updateAutoMove(deltaTime);
    }

    this.updateParticles(currentTime);

    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  private updateParticles(currentTime: number): void {
    this.particles.forEach((particle, index) => {
      const state = this.particleStates[index];

      if (state.targetX !== state.currentX || state.targetY !== state.currentY) {
        const elapsed = currentTime - state.lastUpdate;

        if (elapsed >= state.delay) {
          const progress = Math.min((elapsed - state.delay) / state.duration, 1);
          const easeProgress = this.easeInOutQuad(progress);

          state.currentX = state.currentX + (state.targetX - state.currentX) * easeProgress;
          state.currentY = state.currentY + (state.targetY - state.currentY) * easeProgress;

          particle.style.transform = `translate(${state.currentX}px, ${state.currentY}px) scale(${
            particle.style.transform.includes('scale') ? particle.style.transform.split('scale(')[1].split(')')[0] : 1
          })`;

          if (progress === 1) {
            state.lastUpdate = 0;
          }
        } else {
          state.lastUpdate = currentTime;
        }
      }
    });
  }

  private easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  private setupAutoMove(): void {
    this.isAutoMoving = true;
    this.cursor = { x: 0, y: 0 };
    this.lastMove = performance.now();
  }

  private updateAutoMove(deltaTime: number): void {
    const time = performance.now() * 0.001;

    // Figure-8 movement pattern
    this.cursor.x = Math.sin(time * 0.5) * this.viewport.w * 0.4;
    this.cursor.y = Math.cos(time * 0.8) * this.viewport.h * 0.4;

    this.updateParticleTargets();

    // Pulse occasionally
    if (time % 8 < 0.016) {
      this.pulse();
    }
  }

  private updateParticleTargets(): void {
    const currentTime = performance.now();

    this.particleStates.forEach((state, index) => {
      state.targetX = this.cursor.x;
      state.targetY = this.cursor.y;
      state.lastUpdate = currentTime;
    });
  }

  private pulse(): void {
    this.particles.forEach((particle, index) => {
      const distance = this.centerDistances[index];
      const ratio = distance / this.maxDistance;
      const delay = ratio * 90;

      const originalTransform = particle.style.transform;

      particle.style.transform = originalTransform.replace(/scale\([0-9.]+\)/, 'scale(5)');
      particle.style.opacity = '1';

      setTimeout(() => {
        if (particle.parentNode) {
          // Check if still in DOM
          particle.style.transform = originalTransform;
          particle.style.opacity = `${1 - 0.9 * ratio}`;
        }
      }, 150 + delay);
    });
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  handlePointerMove(e: MouseEvent | TouchEvent): void {
    const event = e instanceof TouchEvent ? e.touches[0] : e;
    this.cursor.x = event.pageX - this.viewport.w;
    this.cursor.y = event.pageY - this.viewport.h;

    this.isAutoMoving = false;
    this.updateParticleTargets();
    this.lastMove = performance.now();

    // Return to auto-move after 1.5 seconds of inactivity
    setTimeout(() => {
      if (performance.now() - this.lastMove > 1500) {
        this.isAutoMoving = true;
      }
    }, 1500);
  }

  private cleanup(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.particles.forEach((particle) => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    });

    window.removeEventListener('resize', this.updateViewport.bind(this));
  }
}
