import { Component, inject } from '@angular/core';
import { ButtonLink } from '../../shared/components/button-link/button-link';
import { Router, RouterLink } from '@angular/router';
import { MenuService } from '../../core/datacore/mainMenu/datamenu-service';
import { SecMenuService } from '../../core/datacore/secondMenu/secMenu-service';

@Component({
  selector: 'app-menu-desctop',
  imports: [ButtonLink, RouterLink],
  templateUrl: './menu-desctop.html',
  styleUrl: './menu-desctop.scss',
  standalone: true,
})
export class MenuDesctop {
  //elementy memu

  private router = inject(Router);
  private menuService = inject(MenuService);
  menuElements = this.menuService.getActiveMenuElements();
  private secMenu = inject(SecMenuService);
  secMenuElement = this.secMenu.getActiveSecMenuElements();

  //funkcja do przekierowywania
  goToLink(link: string) {
    this.router.navigate([link]);
  }
}
