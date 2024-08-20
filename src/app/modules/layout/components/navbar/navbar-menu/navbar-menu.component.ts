import { Component } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu.model';
import { MenuService } from '../../../services/menu.service';
import { NavbarSubmenuComponent } from '../navbar-submenu/navbar-submenu.component';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
  standalone: true,
  imports: [NgFor, NgClass, NavbarSubmenuComponent],
})
export class NavbarMenuComponent {
  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

  constructor(public menuService: MenuService) {}

  public toggleMenu(menu: MenuItem): void {
    menu.selected = !menu.selected;
  }

  public mouseEnter(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    const submenuElement = element?.closest('tmr-navbar-submenu')?.firstElementChild;
    if (submenuElement) {
      this.hideMenuClass.forEach((c) => submenuElement.classList.remove(c));
      this.showMenuClass.forEach((c) => submenuElement.classList.add(c));
    }
  }
  public mouseLeave(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    const submenuElement = element?.closest('tmr-navbar-submenu')?.firstElementChild;
    if (submenuElement) {
      this.showMenuClass.forEach((c) => submenuElement.classList.remove(c));
      this.hideMenuClass.forEach((c) => submenuElement.classList.add(c));
    }
  }
  // public mouseLeave(event: MouseEvent): void {
  //   const element = event.target.querySelector('app-navbar-submenu').children[0];
  //   if (element) {
  //     this.showMenuClass.forEach((c) => element.classList.remove(c));
  //     this.hideMenuClass.forEach((c) => element.classList.add(c));
  //   }
  // }
}
