import { CommonModule, NgClass } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularSvgIconModule, SvgIconRegistryService } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { CodeComponent } from 'src/app/shared/components/code/code.component';
import { WeatherModalComponent } from '../weather-modal/weather-modal.component';
import { catchError, finalize, of, Subject, switchMap, takeUntil } from 'rxjs';
import { IWeather } from 'src/app/core/models/weather.model';
import { WeatherService } from 'src/app/core/services/weather.service';
import { GeocodeService } from 'src/app/core/services/geocode.service';
import { IGeocode } from 'src/app/core/models/geocode.mode';

@Component({
  selector: 'app-address',
  imports: [
    FormsModule,
    NgClass,
    CommonModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    ButtonComponent,
    CodeComponent,
    WeatherModalComponent,
  ],
  providers: [GeocodeService, WeatherService, SvgIconRegistryService],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent implements OnDestroy {
  addressForm: FormGroup;
  isModalVisible: boolean = false;
  weatherData: IWeather | undefined;
  private destroy$ = new Subject<void>();
  latitude: string | undefined;
  longitude: string | undefined;
  error: string = '';
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private geocodingService: GeocodeService,
    private weatherService: WeatherService,
  ) {
    this.addressForm = this.fb.group({
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      this.isSubmitting = true;
      const address = this.addressForm.get('address')?.value;
      this.geocodingService
        .getCoordinates(address)
        .pipe(
          switchMap((data: IGeocode) => {
            const geocodeResult = data.results;
            const firstResult = geocodeResult && geocodeResult[0];
            const coords = firstResult?.geometry;
            this.latitude = `${coords?.lat}`;
            this.longitude = `${coords?.lng}`;
            return this.weatherService.retrieveWeather(coords?.lat, coords?.lng);
          }),
          catchError((error) => {
            console.error('Error fetching data:', error);
            this.error = 'Failed to fetch data';
            return of(null);
          }),
          finalize(() => (this.isSubmitting = false)),
          takeUntil(this.destroy$),
        )
        .subscribe({
          next: (weather) => {
            if (weather) {
              this.weatherData = weather;
            }
          },
        });
    }
  }
  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
  downloadJSON() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.weatherData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'weatherData.json');
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
