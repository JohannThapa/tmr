import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[tmr-text-a1]',
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
export class TextA1Component implements OnInit {
  @Input() text: string = '';
  @Input() highlightIndex: number = -1;
  @Input() fontSize: string = 'text-base';

  private baseClasses: string = '';

  ngOnInit() {
    this.baseClasses = `inline-block hover:cursor-pointer text-foreground text-shadow-a1-primary font-matemasie font-semibold ${this.fontSize}`;
  }

  generateClass(index: number): string {
    if (index === this.highlightIndex) {
      return `${this.baseClasses} hover:animate-wiggle text-primary text-shadow-text-a1`;
    }

    return index % 2 === 0
      ? `${this.baseClasses} hover:animate-bounceSlow`
      : `${this.baseClasses} hover:animate-bounce`;
  }
}
