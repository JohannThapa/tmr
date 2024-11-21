import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BorderType } from 'src/app/core/types/border-type';

@Component({
  selector: '[tmr-button-a2]',
  standalone: true,
  imports: [NgClass, NgFor, RouterLinkActive, RouterLink],
  template: `
    <section class="gooey-section">
      <svg class="absolute -top-[4000px] -left-[4000px]" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="highContrastGraphic" />
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
          </filter>
        </defs>
      </svg>

      <button
        [ngClass]="['px-6 py-3 text-lg rounded-lg relative ', getButtonClasses()]"
        (mouseover)="onMouseOver()"
        (mouseout)="onMouseOut()"
        (click)="onClick($event)"
        (blur)="onBlur()"
        (focus)="onFocus()"
        [routerLink]="routerLink"
        routerLinkActive="text-primary"
        [routerLinkActiveOptions]="{ exact: true }"
        [attr.aria-label]="text"
        id="gooey-button">
        {{ text }}
        <span class="absolute inset-0 -z-10 bubbles">
          <span
            *ngFor="let bubble of bubbleLen"
            [class.animate-none]="isHovered"
            [ngClass]="['bubble rounded-full absolute', 'bg-' + bgClass]"></span>
        </span>
      </button>
    </section>
  `,
})
export class ButtonA2Component {
  @Input() text: string = 'More';
  @Input() bgClass: BorderType = 'primary';
  @Input() hasAnimation: boolean = true;
  @Input() routerLink?: string;

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  isHovered = false;

  constructor(private router: Router) {}

  get bubbleLen() {
    return this.text.split('');
  }

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }

  onBlur() {
    console.log('Button blurred');
  }

  onFocus() {
    console.log('Button focused');
  }

  onClick(event: MouseEvent) {
    if (this.buttonClick.observed) {
      this.buttonClick.emit(event);
      event.preventDefault();
    }
  }

  getButtonClasses(): string {
    const baseClass = 'bg-primary text-white hover:scale-105 transition-transform';
    switch (this.bgClass) {
      case 'secondary':
        return 'bg-gray-500 hover:bg-gray-600 text-white ' + baseClass;
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white ' + baseClass;
      case 'success':
        return 'bg-green-500 hover:bg-green-600 text-white ' + baseClass;
      default:
        return baseClass;
    }
  }
}
