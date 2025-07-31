import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'tmr-badge-a1',
    imports: [AngularSvgIconModule, NgClass],
    template: `
    <span [ngClass]="badgeClasses">
      <svg-icon [src]="icon" [svgClass]="'h-4 w-4 text-foreground'"></svg-icon>
      <span class="ml-1">
        {{ text }}
      </span>
    </span>
  `,
    styles: `
  :host {
    display: inline-block;
  }
  `
})
export class BadgeA1Component {
  @Input() text: string = 'Default Badge';
  @Input() icon: string = '/assets/icons/icon8/icons8-mysql-50.svg';
  @Input() bgColor: string = 'bg-gray-200';
  @Input() hoverBgColor: string = 'hover:bg-gray-300';
  @Input() textColor: string = 'text-gray-600';

  get badgeClasses(): string[] {
    return [
      'inline-flex',
      'items-center',
      'm-2',
      'px-3',
      'py-1',
      'rounded-full',
      'text-sm',
      'font-semibold',
      this.bgColor,
      this.hoverBgColor,
      this.textColor,
    ];
  }
}
