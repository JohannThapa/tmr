import { Component } from '@angular/core';
import { FormComponent } from './components/form.component';
@Component({
    selector: 'app-form',
    imports: [FormComponent],
    templateUrl: './weather-form.component.html'
})
export class WeatherFormComponent {}
