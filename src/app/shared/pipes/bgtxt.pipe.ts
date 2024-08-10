import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgtxt',
  standalone: true,
})
export class BgtxtPipe implements PipeTransform {
  transform(value: string): string {
    return this.bgToText(value);
  }

  private bgToText(hex: string): string {
    if (hex.startsWith('#')) {
      hex = hex.slice(1);
    }
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((char) => char + char)
        .join('');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b; // Luminance = 0.299*R + 0.587*G + 0.114*B

    return brightness < 128 ? '#ffffff' : '#000000';
  }
}
