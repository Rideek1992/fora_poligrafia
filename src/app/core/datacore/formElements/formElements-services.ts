import { Injectable } from '@angular/core';
import { FORM_ELEMENT_OPTIONS } from './formElements';
import { ConversatrionElement } from './formElements-interface';

@Injectable({
  providedIn: 'root',
})
export class FormElementsService {
  getFormElement(): ConversatrionElement[] {
    return FORM_ELEMENT_OPTIONS;
  }

  getActiveFormOptionElement(): ConversatrionElement[] {
    return FORM_ELEMENT_OPTIONS.filter((element) => element.active);
  }
}
