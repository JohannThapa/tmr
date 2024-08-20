import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[tmr-bubble-card]',
  standalone: true,
  imports: [NgClass, NgStyle],
  template: `
    <div [ngClass]="generateClass()">
      <div class="bubble-image">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrl: './bubble-card.component.scss',
})
export class BubbleCardComponent {
  @Input() customClass?: string;
  @Input() width?: number;
  @Input() height?: number;

  get adjustedWidth(): number {
    return this.width ? (window.innerWidth >= 768 ? this.width : this.width / 2) : 288;
  }

  get adjustedHeight(): number {
    return this.height ? (window.innerWidth >= 768 ? this.height : this.height / 2) : 288;
  }

  generateClass(): string {
    const baseClasses = `bubble-container flex items-center justify-center mx-auto rounded-custom shadow-default animate-morphing overflow-hidden hover:animate-none`;
    if (this.adjustedWidth && this.adjustedHeight) {
      return `${baseClasses} w-[${this.adjustedWidth}px] h-[${this.adjustedHeight}px]`;
    }
    return `${baseClasses} w-72 h-72`;
  }
}
