import { Component, Input } from '@angular/core';
import { SubMenuItem } from 'src/app/core/models/menu.model';
import { MenuService } from '../../../services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-sidebar-submenu',
    templateUrl: './sidebar-submenu.component.html',
    styleUrls: ['./sidebar-submenu.component.scss'],
    imports: [NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule]
})
export class SidebarSubmenuComponent {
  @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) {}

  public toggleMenu(menu: SubMenuItem) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<SubMenuItem>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
