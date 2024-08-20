import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IWeather } from 'src/app/core/models/weather.model';

@Component({
  selector: 'app-weather-polar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-polar-chart.component.html',
  styleUrl: './weather-polar-chart.component.scss',
})
export class WeatherPolarChartComponent implements AfterViewInit {
  @ViewChild('polarChart') polarChart!: ElementRef;
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  @Input() weatherData: IWeather | undefined;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createPolarChart();
  }

  setDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const formattedDate =
      date.getFullYear() +
      '/' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + date.getDate()).slice(-2) +
      ' ' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2) +
      ':' +
      ('0' + date.getSeconds()).slice(-2);
    return formattedDate;
  }
  celsiusToKelvin(celsius: number = 0): number {
    const kelvin = celsius + 273.15;
    return kelvin;
  }
  createPolarChart() {
    this.canvas = this.polarChart?.nativeElement;
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      if (this.ctx && this.weatherData) {
        new Chart(this.ctx, {
          type: 'polarArea',
          data: {
            labels: ['Temperature(K)', 'Sea Level', 'Min Temp(K)', 'Max Temp(K)', 'Grnd Level'],
            datasets: [
              {
                label: 'Weather Data',
                data: [
                  this.celsiusToKelvin(this.weatherData.main?.temp),
                  this.weatherData.main?.sea_level,
                  this.celsiusToKelvin(this.weatherData.main?.temp_min),
                  this.celsiusToKelvin(this.weatherData.main?.temp_max),
                  this.weatherData.main?.grnd_level,
                ],
                backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24', '#a78bfa', '#f472b6'],
                borderColor: '#ffffff',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              r: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: true,
              },
            },
          },
        });
      }
    }
  }
}
