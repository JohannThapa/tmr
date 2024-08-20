import { Component } from '@angular/core';
import { AddressComponent } from 'src/app/modules/weather/pages/address/address.component';

@Component({
  selector: 'tmr-weather-form',
  standalone: true,
  imports: [AddressComponent],
  template: `
    <div class="flex min-w-full flex-col rounded-xl border border-muted/20 bg-background p-2">
      <app-address></app-address>
    </div>
  `,
})
export class FormComponent {}
