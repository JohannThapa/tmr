import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[text-a1]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="banner-text-zone">
      <h1>
        <span *ngFor="let letter of text.split(''); let i = index" [ngClass]="generateClass(i)">
          {{ letter === ' ' ? '&nbsp;' : letter }}
        </span>
      </h1>
    </div>
  `,
  styles: [],
})
export class TextA1Component {
  @Input() text: string = '';
  @Input() highlightIndex: number = -1;
  @Input() fontSize: string = 'text-base';

  generateClass(index: number): string {
    const baseClasses = `inline-block hover:cursor-pointer text-foreground text-shadow-a1-primary font-matemasie font-semibold ${this.fontSize}`;

    if (index === this.highlightIndex) {
      return `${baseClasses} hover:animate-wiggle text-primary text-shadow-text-a1`;
    }

    return index % 2 === 0 ? `${baseClasses} hover:animate-bounceSlow` : `${baseClasses} hover:animate-bounce`;
  }
}
