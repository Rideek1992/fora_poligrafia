import { Component, inject } from '@angular/core';
import { FormElementsService } from '../../../core/datacore/formElements/formElements-services';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentFormService } from './form-section.service';
import { ApiBackendCMSService } from '../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { Router } from '@angular/router';

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

    companyName: '',
    formStartedAt: Date.now(),
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
  formStart = false;
  private api = inject(ApiBackendCMSService);
  private formOptionsElement = inject(FormElementsService);
  dataOptionElements = this.formOptionsElement.getActiveFormOptionElement();
  private analytics = inject(AnalyticsService);
  private contentFormService = inject(ContentFormService);
  private route = inject(Router);

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

          companyName: this.formModel.companyName,
          formStartedAt: this.formModel.formStartedAt,
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

              companyName: '',
              formStartedAt: Date.now(),
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

  onFormInteraction(data: string) {
    if (this.formStart) return;

    this.formStart = true;

    this.analytics.trackEvent('form_iteraction', {
      form_name: `contact_form_${data}`,
      page_url: this.route.url,
    });
  }

  onSubmitGA(): void {
    this.analytics.trackEvent('form_submit', {
      page_url: this.route.url,
    });
  }
}
