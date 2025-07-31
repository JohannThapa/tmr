import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-navbar-mobile',
    templateUrl: './navbar-mobile.component.html',
    styleUrls: ['./navbar-mobile.component.scss'],
    imports: [NgClass, AngularSvgIconModule, NavbarMobileMenuComponent]
})
export class NavbarMobileComponent {
  constructor(public menuService: MenuService) {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }
}
