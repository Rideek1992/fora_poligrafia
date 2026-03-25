import { Injectable } from '@angular/core';
import { DataMenuInterface } from './datamenu-interface';
import { MENU_ELEMENTS } from './datamenu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuElements(): DataMenuInterface[] {
    return MENU_ELEMENTS;
  }

  getActiveMenuElements(): DataMenuInterface[] {
    return MENU_ELEMENTS.filter((element) => element.active);
  }
}
