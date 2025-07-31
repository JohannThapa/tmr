import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'tmr-prj-header',
    imports: [NgIf],
    templateUrl: './prj-header.component.html'
})
export class PrjHeaderComponent {
  public env = environment;
}
