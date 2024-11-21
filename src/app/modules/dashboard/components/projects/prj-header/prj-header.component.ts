import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tmr-prj-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './prj-header.component.html',
  styleUrl: './prj-header.component.scss',
})
export class PrjHeaderComponent {
  public env = environment;
}
