import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { INgStyle } from 'src/app/core/models/angular-custom';

@Component({
    selector: 'tmr-custom-img',
    imports: [NgClass, NgStyle],
    template: `
    <img
      [ngClass]="computedClasses"
      [src]="src"
      [alt]="alt"
      [width]="adjustedWidth"
      [height]="adjustedHeight"
      [attr.loading]="loading"
      class="transform scale-150"
      [attr.priority]="priority ? 'eager' : 'lazy'"
      [ngStyle]="computedStyles"
      (load)="onImageLoad($event)" />
  `,
    styleUrl: './custom-img.component.scss'
})
export class CustomImgComponent implements OnInit {
  private _width = 300;
  private _height = 300;

  @Input() src!: string;
  @Input() alt!: string;
  @Input() fill?: boolean = false;
  @Input() priority?: boolean = false;
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() blurDataURL?: string;
  @Input() customClass?: string;

  computedClasses: string = '';
  computedStyles: INgStyle = {};

  @Input()
  set width(value: number) {
    this._width = value;
  }

  get width(): number {
    return this._width;
  }

  @Input()
  set height(value: number) {
    this._height = value;
  }

  get height(): number {
    return this._height;
  }

  get adjustedWidth(): number {
    return window.innerWidth >= 768 ? this.width : this.width / 2;
  }

  get adjustedHeight(): number {
    return window.innerWidth >= 768 ? this.height : this.height / 2;
  }

  ngOnInit() {
    this.computedClasses = this.computeClasses();
    this.computedStyles = this.computeStyles();
  }

  computeClasses(): string {
    const baseClasses = 'transition duration-500 hover:scale-105';
    const additionalClasses = this.customClass || '';

    return `${baseClasses} ${additionalClasses}`;
  }

  computeStyles(): INgStyle {
    const styles: INgStyle = {};
    if (this.fill) {
      styles.width = '100%';
      styles.height = '100%';
      styles.objectFit = 'cover';
    }
    if (this.blurDataURL) {
      styles.filter = 'blur(20px)';
    }

    return styles;
  }

  onImageLoad(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    if (this.blurDataURL) {
      imgElement.style.filter = 'none';
    }
    // TODO: Handle onLoad if needed.
  }
}
