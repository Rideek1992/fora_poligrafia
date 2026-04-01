import { Component, inject } from '@angular/core';
import { FormElementsService } from '../../../core/datacore/formElements/formElements-services';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentFormService } from './form-section.service';

@Component({
  selector: 'app-form-section',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-section.html',
  styleUrl: './form-section.scss',
  standalone: true,
})
export class FormSection {
  consentContactGiven = false;
  consentContactVersion = 'v1';
  private FormOptionsElement = inject(FormElementsService);
  dataOptionElements = this.FormOptionsElement.getActiveFormOptionElement();
  private ContentFormService = inject(ContentFormService);

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const payload = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone || '',
      message: form.value.message,
      topic: form.value.topic,
      conversatrionElement: form.value.conversatrionElement,
      consentContactGiven: form.value.consentContactGiven,
      consentContactVersion: this.consentContactVersion,
    };

    console.log('Payload wysłany do serwera:', payload);

    console.log('FORM VALUE', form.value);
    console.log('PAYLOAD', payload);

    this.ContentFormService.sendContactForm(payload).subscribe({
      next: (response) => {
        console.log('Sukces', response);
        form.resetForm();
      },
      error: (error) => {
        console.error('Bład wysyłki formularza', error);
      },
    });
  }
}
