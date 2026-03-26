import { Injectable } from '@angular/core';
import { DATA_TECH } from './datatechmenu';
import { DatatechmenuInterface } from './datatechmenu-interface';

@Injectable({ providedIn: 'root' })
export class DataTechMenuSerivce {
  getMenuElements = (): DatatechmenuInterface[] => DATA_TECH;

  getActiveMenuElements = (): DatatechmenuInterface[] =>
    DATA_TECH.filter((element) => element.active);
}
