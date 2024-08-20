import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OPEN_CAGE_API_UTL } from '../constants/api-url';
import { IGeocode } from '../models/geocode.mode';

@Injectable({
  providedIn: 'root',
})
export class GeocodeService {
  private apiUrl: string = OPEN_CAGE_API_UTL;

  constructor(private http: HttpClient) {}

  getCoordinates(address: string): Observable<IGeocode> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(address)}&key=${environment.openCageApiKey}`;
    return this.http.get(url);
  }
}
