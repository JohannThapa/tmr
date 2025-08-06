import { Component } from '@angular/core';
import packageJson from '../../../../../../package.json';
import { MenuService } from '../../services/menu.service';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [NgClass, NgIf, AngularSvgIconModule, SidebarMenuComponent],
})
export class SidebarComponent {
  public appJson = packageJson;

  constructor(public menuService: MenuService) {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
