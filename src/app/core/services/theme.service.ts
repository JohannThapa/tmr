import { Injectable, signal } from '@angular/core';
import { Theme } from '../models/theme.model';
import { effect } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme = signal<Theme>({ mode: 'dark', color: 'base' });

  private themeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>({
    mode: 'dark',
    color: 'base',
  });
  public theme$: Observable<Theme> = this.themeSubject.asObservable();

  constructor() {
    this.loadTheme();
    effect(() => {
      this.setTheme();
    });
  }

  private loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.theme.set(JSON.parse(theme));
    }
  }

  private setTheme() {
    const theme: Theme = this.theme();
    this.themeSubject.next(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
    this.setThemeClass();
  }

  public get isDark(): boolean {
    return this.theme().mode == 'dark';
  }

  private setThemeClass() {
    document.querySelector('html')!.className = this.theme().mode;
    document.querySelector('html')!.setAttribute('data-theme', this.theme().color);
  }
}
