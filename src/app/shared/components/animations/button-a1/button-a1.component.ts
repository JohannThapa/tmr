import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BorderType } from 'src/app/core/types/border-type';

@Component({
  selector: '[tmr-button-a1]',
  imports: [CommonModule, NgClass],
  template: `
    <div class="mt-14 flex items-center justify-center">
      <button
        class="relative h-24 w-24 text-center text-xs font-bold uppercase tracking-widest"
        role="button"
        (mouseover)="onMouseOver()"
        (mouseout)="onMouseOut()"
        (blur)="onBlur()"
        (focus)="onFocus()"
        (click)="onClick()">
        {{ text }}
        <span
          class="absolute inset-0 rounded-sm border-2 border-solid"
          [ngClass]="[getBorderClass(borderClass), ' animate-btn-a1', isHovered ? 'hover:animate-none' : '']">
        </span>
        <span class="absolute inset-0 z-[-1] rotate-45 transform rounded-sm bg-primary-foreground"></span>
      </button>
    </div>
  `,
  styleUrl: './button-a1.component.scss',
})
export class ButtonA1Component {
  @Input() text: string = 'More';
  @Input() borderClass: BorderType = 'primary';
  @Input() hasAnimation: boolean = true;

  @Output() buttonClick = new EventEmitter<void>();

  isHovered = false;

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }

  onBlur() {
    // TODO:Add any logic here if needed, like resetting hover styles.
  }

  onFocus() {
    // TODO:Add any logic here if needed, like applying hover styles.
  }
  onClick() {
    this.buttonClick.emit();
  }
  getBorderClass(type: BorderType): string {
    switch (type) {
      case 'primary':
        return 'border-primary';
      case 'secondary':
        return 'border-secondary';
      case 'destructive':
        return 'border-destructive';
      case 'orange':
        return 'border-orange';
      default:
        return '';
    }
  }
}
