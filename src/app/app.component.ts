import { Component, signal } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { NgxSonnerToaster } from 'ngx-sonner';
import { ChipLoaderComponent } from './modules/layout/components/loaders/chip-loader/chip-loader.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, CommonModule, ResponsiveHelperComponent, ChipLoaderComponent, NgxSonnerToaster],
})
export class AppComponent {
  title = 'TMR';
  isLoading = signal(false);

  constructor(private router: Router, public themeService: ThemeService) {
    // Wait for first NavigationEnd to ensure routing and modules are loaded
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      // Simulate delay if needed
      setTimeout(() => this.isLoading.set(true), 200); // remove this delay in prod
    });
  }
}
