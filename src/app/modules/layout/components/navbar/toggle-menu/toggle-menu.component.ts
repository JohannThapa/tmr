import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-toggle-menu',
  imports: [NgClass, AngularSvgIconModule],
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss'],
})
export class ToggleMenuComponent implements OnInit {
  public currentMode: string;

  constructor(public themeService: ThemeService) {
    this.currentMode = this.themeService.theme().mode;
  }

  toggleThemeMode(): void {
    this.themeService.theme.update((theme) => {
      const newMode = this.currentMode === 'light' ? 'dark' : 'light';
      this.currentMode = newMode;
      return { ...theme, mode: newMode };
    });
  }

  ngOnInit(): void {
    this.currentMode = this.themeService.theme().mode;
  }
}
