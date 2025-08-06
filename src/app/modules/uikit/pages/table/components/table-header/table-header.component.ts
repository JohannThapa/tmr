import { Component, EventEmitter, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[app-table-header]',
  imports: [AngularSvgIconModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
})
export class TableHeaderComponent {
  @Output() selectAll = new EventEmitter<boolean>();
  public toggle(event: Event) {
    const value = (event.target as HTMLInputElement).checked;
    this.selectAll.emit(value);
  }
}
