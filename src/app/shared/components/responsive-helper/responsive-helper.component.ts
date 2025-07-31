import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-responsive-helper',
    templateUrl: './responsive-helper.component.html',
    styleUrls: ['./responsive-helper.component.scss'],
    imports: [NgIf]
})
export class ResponsiveHelperComponent {
  public env = environment;

  constructor() {}
}
