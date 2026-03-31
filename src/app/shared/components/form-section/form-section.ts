import { Component, inject } from '@angular/core';
import { FormElementsService } from '../../../core/datacore/formElements/formElements-services';

@Component({
  selector: 'app-form-section',
  imports: [],
  templateUrl: './form-section.html',
  styleUrl: './form-section.scss',
})
export class FormSection {
  private FormOptionsElement = inject(FormElementsService);

  dataOptionElements = this.FormOptionsElement.getActiveFormOptionElement();
}
