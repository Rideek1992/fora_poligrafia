import { Component, inject } from '@angular/core';
import { SecMenuService } from '../../core/datacore/secondMenu/secMenu-service';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../core/datacore/mainMenu/datamenu-service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();
  protected readonly toString = toString;
  private secMenu = inject(SecMenuService);
  secMenuElement = this.secMenu.getActiveSecMenuElements();
  private menuService = inject(MenuService);
  menuElements = this.menuService.getActiveMenuElements();
}
