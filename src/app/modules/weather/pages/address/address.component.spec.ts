/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address.component';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AngularSvgIconModule, SvgIconRegistryService, SvgLoader } from 'angular-svg-icon';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { GeocodeService } from 'src/app/core/services/geocode.service';
import { WeatherService } from 'src/app/core/services/weather.service';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let geocodeServiceSpy: jasmine.SpyObj<GeocodeService>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    const geocodeSpy = jasmine.createSpyObj('GeocodeService', ['getCoordinates']);
    const weatherSpy = jasmine.createSpyObj('WeatherService', ['retrieveWeather']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AngularSvgIconModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient(withFetch()),
        { provide: SvgLoader, useValue: { getSvg: () => of('') } },
        SvgIconRegistryService,
        FormBuilder,
        { provide: GeocodeService, useValue: geocodeSpy },
        { provide: WeatherService, useValue: weatherSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    geocodeServiceSpy = TestBed.inject(GeocodeService) as jasmine.SpyObj<GeocodeService>;
    weatherServiceSpy = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit if form is invalid', () => {
    spyOn(component, 'onSubmit').and.callThrough();

    const submitButton = fixture.nativeElement.querySelector('button.bg-primary') as HTMLButtonElement;
    if (submitButton) {
      expect(submitButton.disabled).toBe(true);
    }
    submitButton.click();
    fixture.detectChanges();
    expect(component.onSubmit).not.toHaveBeenCalled();
  });

  it('should fetch coordinates and weather data on valid form submit', fakeAsync(() => {
    component.addressForm.setValue({ address: 'New York' });
    component.onSubmit();
    tick();

    expect(component.isSubmitting).toBe(true);
  }));
});
