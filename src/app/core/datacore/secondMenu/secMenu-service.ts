import { Injectable } from '@angular/core';
import { SecMenuInterface } from './secMenu-interface';
import { SEC_MENU } from './secMenu';

@Injectable({
  providedIn: 'root',
})
export class SecMenuService {
  getSecMenuElements(): SecMenuInterface[] {
    return SEC_MENU;
  }

  getActiveSecMenuElements(): SecMenuInterface[] {
    return SEC_MENU.filter((element) => element.active);
  }
}
