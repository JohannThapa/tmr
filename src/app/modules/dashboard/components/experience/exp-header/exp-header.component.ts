import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tmr-exp-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './exp-header.component.html',
})
export class ExpHeaderComponent {
  public env = environment;
}
