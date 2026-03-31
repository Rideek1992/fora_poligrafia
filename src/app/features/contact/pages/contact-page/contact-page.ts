import { Component, OnInit } from '@angular/core';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { LoaderPage } from '../../../../shared/components/loader-page/loader-page';
import { FormSection } from '../../../../shared/components/form-section/form-section';

@Component({
  selector: 'app-contact-page',
  imports: [HeroPage, LoaderPage, FormSection],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage implements OnInit {
  data: ServicePageInterface | null | undefined = null;
  isActive: boolean = false;

  constructor(private api: ApiBackendCMSService) {}

  ngOnInit(): void {
    this.api.getPageData('kontakt').subscribe({
      next: (data) => {
        this.data = data;
        this.isActive = true;
      },
      error: (err) => {
        console.log(err);
        this.isActive = false;
      },
    });
  }
}
