import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { AddressComponent } from './pages/address/address.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent,
    children: [
      { path: '', redirectTo: 'address', pathMatch: 'full' },
      { path: 'address', component: AddressComponent, data: { returnUrl: window.location.pathname } },
      { path: 'form', component: AddressComponent },
      { path: '**', redirectTo: 'address', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
