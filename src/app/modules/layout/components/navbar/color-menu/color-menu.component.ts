import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgClass } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { COLORS } from 'src/app/core/constants/colors';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ClickOutsideDirective } from 'src/app/shared/directives/click-outside.directive';
import { BgtxtPipe } from 'src/app/shared/pipes/bgtxt.pipe';

const BASE_COLOR = COLORS[0].code;
@Component({
  selector: 'app-color-menu',
  standalone: true,
  imports: [ClickOutsideDirective, NgClass, RouterLink, AngularSvgIconModule, BgtxtPipe],
  templateUrl: './color-menu.component.html',
  styleUrl: './color-menu.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          visibility: 'visible',
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
          visibility: 'hidden',
        }),
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class ColorMenuComponent implements AfterViewInit {
  public isOpen = false;
  public mainColor: string;
  public label: string = 'β';
  public themeColors = COLORS;

  constructor(public themeService: ThemeService) {
    this.mainColor = BASE_COLOR;
  }

  ngAfterViewInit(): void {
    this.setColor(this.themeService.theme().color || 'base');
  }
  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  setColor(name: string) {
    const current = this.themeColors.find((c) => c.name === name)?.code || BASE_COLOR;
    const color = this.themeColors.find((c) => c.name === name)?.name || 'base';
    this.mainColor = current;
    this.label = name === 'base' ? 'β' : color.charAt(0).toUpperCase();
  }

  toggleThemeColor(color: string) {
    this.setColor(color);
    this.themeService.theme.update((theme) => {
      return { ...theme, color: color };
    });
  }
}
