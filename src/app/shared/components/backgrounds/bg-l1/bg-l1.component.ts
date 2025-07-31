import { Component, Input, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Theme } from 'src/app/core/models/theme.model';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
    selector: '[tmr-bg-l1]',
    imports: [],
    template: `<div class="relative w-full -mt-4">
    <ng-content></ng-content>
  </div> `,
    styleUrl: './bg-l1.component.scss'
})
export class BgL1Component implements OnInit, OnDestroy {
  @Input() light: string = `/assets/bg/top.jpg`;
  @Input() dark: string = `/assets/bg/everest.svg`;
  public imageUrl: string = '';

  @HostBinding('class') hostClass = '';
  @HostBinding('style.background') backgroundStyle = '';
  private themeSubscription!: Subscription;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe((theme: Theme) => {
      this.updateBackground(theme.mode);
    });
  }
  private updateBackground(mode: string): void {
    const gradient =
      mode === 'dark'
        ? 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))'
        : 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))';

    const position = '50% 50% no-repeat';
    this.imageUrl = mode === 'dark' ? this.dark : this.light;
    this.backgroundStyle = `${gradient}, black url('${this.imageUrl}') ${position}`;
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
