import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CodeComponent } from 'src/app/shared/components/code/code.component';

@Component({
    selector: 'app-weather',
    imports: [RouterOutlet, CommonModule, CodeComponent, AngularSvgIconModule],
    templateUrl: './weather.component.html',
    styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  constructor() {}
}
