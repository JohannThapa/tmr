import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OPEN_WEATHER_API_UTL } from '../constants/api-url';
import { environment } from 'src/environments/environment';
import { IWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl: string = OPEN_WEATHER_API_UTL;
  constructor(private http: HttpClient) {}

  retrieveWeather(lat?: number, lon?: number): Observable<IWeather> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${environment.openWeatherApiKey}&units=metric`;
    return this.http.get(url);
  }
}
