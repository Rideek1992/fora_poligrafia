import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../core/datacore/mainMenu/datamenu-service';
import { SecMenuService } from '../../core/datacore/secondMenu/secMenu-service';

@Component({
  selector: 'app-menu-mobile',
  imports: [],
  templateUrl: './menu-mobile.html',
  styleUrl: './menu-mobile.scss',
})
export class MenuMobile implements OnInit {
  activeMenu: boolean = false;
  menuElementMobile: any = [];
  secMenuElementMobile: any = [];

  constructor(
    private router: Router,
    private MenuService: MenuService,
    private secMenu: SecMenuService,
  ) {}

  ngOnInit(): void {
    this.menuElementMobile = this.MenuService.getActiveMenuElements();
    this.secMenuElementMobile = this.secMenu.getActiveSecMenuElements();
  }

  openMenu() {
    this.activeMenu = !this.activeMenu;
  }

  goToLink(link: string) {
    void this.router.navigate([link]);
    this.activeMenu = false;
  }
}
