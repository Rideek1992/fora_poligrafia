import { Component, inject } from '@angular/core';
import { FormElementsService } from '../../../core/datacore/formElements/formElements-services';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentFormService } from './form-section.service';
import { ApiBackendCMSService } from '../../../core/backendCMS/apiCMS/apiBackendCMS-services';

@Component({
  selector: 'app-form-section',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-section.html',
  styleUrl: './form-section.scss',
  standalone: true,
})
export class FormSection {
  consentContactVersion: any = '';
  formModel = {
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    conversatrionElement: '',
    consentContactGiven: false,
  };

  succesData = {
    isSucces: false,
    data: {
      name: '',
      email: '',
      phone: '',
      informationCode: '',
    },
  };
  private api = inject(ApiBackendCMSService);
  private formOptionsElement = inject(FormElementsService);
  dataOptionElements = this.formOptionsElement.getActiveFormOptionElement();

  private contentFormService = inject(ContentFormService);

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.api.getPoliticPrivacy().subscribe({
      next: (data) => {
        this.consentContactVersion = data?.version;

        const payload = {
          name: this.formModel.name,
          email: this.formModel.email,
          phone: this.formModel.phone || '',
          message: this.formModel.message,
          topic: this.formModel.topic,
          conversatrionElement: this.formModel.conversatrionElement,
          consentContactGiven: this.formModel.consentContactGiven,
          consentContactVersion: this.consentContactVersion,
        };

        this.contentFormService.sendContactForm(payload).subscribe({
          next: (response) => {
            // console.log('Sukces', response);
            this.succesData = {
              isSucces: true,
              data: {
                name: this.formModel.name,
                email: this.formModel.email,
                phone: this.formModel.phone || '',
                informationCode: response.data.strapiResult.data.informationCode,
              },
            };
            console.log(this.succesData);
            form.resetForm();
            this.formModel = {
              name: '',
              email: '',
              phone: '',
              topic: '',
              message: '',
              conversatrionElement: '',
              consentContactGiven: false,
            };
          },
          error: (error) => {
            console.error('Błąd wysyłki formularza', error);
          },
        });
      },
      error: (error) => {
        console.error('Błąd pobierania danych', error);
      },
    });
  }
}
