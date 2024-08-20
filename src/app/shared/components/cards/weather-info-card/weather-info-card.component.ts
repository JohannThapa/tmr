import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IWeather } from 'src/app/core/models/weather.model';

@Component({
  selector: '[tmr-weather-info-card]',
  standalone: true,
  imports: [NgStyle, CommonModule, AngularSvgIconModule, NgClass],
  templateUrl: './weather-info-card.component.html',
  styleUrl: './weather-info-card.component.scss',
})
export class WeatherInfoCardComponent {
  @Input() weather: IWeather | undefined = <IWeather | undefined>{};
}
