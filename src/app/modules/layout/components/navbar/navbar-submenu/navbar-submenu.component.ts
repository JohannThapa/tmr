import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { SubMenuItem } from 'src/app/core/models/menu.model';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor, NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
  selector: 'div[tmr-navbar-submenu]',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.scss'],
  imports: [NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIf, AngularSvgIconModule],
})
export class NavbarSubmenuComponent implements AfterViewInit {
  @Input() public submenu = <SubMenuItem[]>{};
  @ViewChild('submenuRef') submenuRef: ElementRef<HTMLDivElement> | undefined;

  constructor() {}

  ngAfterViewInit() {
    /**
     * check if component is out of the screen
     */
    if (this.submenuRef) {
      const submenu = this.submenuRef.nativeElement.getBoundingClientRect();
      const bounding = document.body.getBoundingClientRect();

      if (submenu.right > bounding.right) {
        const childrenElement = this.submenuRef.nativeElement.parentNode as HTMLElement;
        if (childrenElement) {
          childrenElement.style.left = '-100%';
        }
      }
    }
  }
}
