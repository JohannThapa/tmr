import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IWeather } from 'src/app/core/models/weather.model';

@Component({
    selector: 'app-weather-charts',
    imports: [CommonModule],
    templateUrl: './weather-charts.component.html',
    styleUrl: './weather-charts.component.scss'
})
export class WeatherChartsComponent implements AfterViewInit {
  @ViewChild('lineChart') lineChart!: ElementRef;
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  @Input() weatherData: IWeather | undefined;
  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }
  createChart() {
    this.canvas = this.lineChart.nativeElement;
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      if (this.ctx && this.weatherData) {
        new Chart(this.ctx, {
          type: 'line',
          data: {
            labels: ['Temperature', 'Feels Like', 'Min Temp', 'Max Temp'],
            datasets: [
              {
                label: 'Temperature (°C)',
                data: [
                  this.weatherData.main?.temp,
                  this.weatherData.main?.feels_like,
                  this.weatherData.main?.temp_min,
                  this.weatherData.main?.temp_max,
                ],
                borderColor: '#f87171',
                fill: false,
                tension: 0.1,
              },
              {
                label: 'Humidity (%)',
                data: [
                  this.weatherData.main?.humidity,
                  this.weatherData.main?.humidity,
                  this.weatherData.main?.humidity,
                  this.weatherData.main?.humidity,
                ],
                borderColor: '#60a5fa',
                fill: false,
                tension: 0.1,
              },
              {
                label: 'Wind Speed (m/s)',
                data: [
                  this.weatherData.wind?.speed,
                  this.weatherData.wind?.speed,
                  this.weatherData.wind?.speed,
                  this.weatherData.wind?.speed,
                ],
                borderColor: '#34d399',
                fill: false,
                tension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              y: {
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
