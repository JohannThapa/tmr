import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-idx-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './idx-header.component.html',
})
export class IdxHeaderComponent {
  public env = environment;

  constructor() {}
}
