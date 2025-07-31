import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BorderType } from 'src/app/core/types/border-type';

@Component({
    selector: '[tmr-button-a1]',
    imports: [CommonModule, NgClass],
    template: `
    <div class="flex justify-center mt-14 items-center">
      <button
        class="relative w-24 h-24 text-center text-xs uppercase font-bold tracking-widest"
        role="button"
        (mouseover)="onMouseOver()"
        (mouseout)="onMouseOut()"
        (blur)="onBlur()"
        (focus)="onFocus()"
        (click)="onClick()">
        {{ text }}
        <span
          class="absolute inset-0 border-2 border-solid rounded-sm"
          [ngClass]="[getBorderClass(borderClass), ' animate-btn-a1', isHovered ? 'hover:animate-none' : '']">
        </span>
        <span class="absolute inset-0 bg-primary-foreground rounded-sm z-[-1] transform rotate-45"></span>
      </button>
    </div>
  `,
    styleUrl: './button-a1.component.scss'
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
