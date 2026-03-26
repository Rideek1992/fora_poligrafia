import { Component, inject } from '@angular/core';
import { SecMenuService } from '../../core/datacore/secondMenu/secMenu-service';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../core/datacore/mainMenu/datamenu-service';
import { DataTechMenuSerivce } from '../../core/datacore/technicalMenu/datatechmenu-service';
import { InformationMenuService } from '../../core/datacore/informtionMenu/informationMenu-service';

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
  private dataTechMenu = inject(DataTechMenuSerivce);
  dataTechMenuElement = this.dataTechMenu.getActiveMenuElements();
  private informationMenu = inject(InformationMenuService);
  dataInformationMenu = this.informationMenu.getActiveMenuElement();
}
