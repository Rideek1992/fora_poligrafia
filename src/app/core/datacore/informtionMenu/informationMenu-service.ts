import { Injectable } from '@angular/core';
import { INFORMATION_MENU } from './informationMenu';
import { InformationMenu } from './informationMenu-interface';

@Injectable({ providedIn: 'root' })
export class InformationMenuService {
  getMenuElement(): InformationMenu[] {
    return INFORMATION_MENU;
  }
  getActiveMenuElement(): InformationMenu[] {
    return INFORMATION_MENU.filter((element) => element.active);
  }
}
