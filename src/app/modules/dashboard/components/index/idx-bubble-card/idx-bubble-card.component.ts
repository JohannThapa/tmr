import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[idx-bubble-card]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="generateClass()">
      <div class="bubble-image">
        <img [src]="image" class="transform scale-150" alt="test" />
      </div>
    </div>
  `,
  styleUrl: './idx-bubble-card.component.scss',
})
export class IdxBubbleCardComponent {
  @Input() image: string = '';
  @Input() size: string = '';

  generateClass(): string {
    const baseClasses = `bubble-container flex items-center justify-center mx-auto rounded-custom shadow-default animate-morphing overflow-hidden hover:animate-none`;
    if (this.size) {
      return `${baseClasses} w-[${this.size}] h-[${this.size}]`;
    }
    return `${baseClasses} w-72 h-72`;
  }
}
