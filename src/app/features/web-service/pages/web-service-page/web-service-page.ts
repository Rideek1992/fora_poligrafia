import { Component, OnInit } from '@angular/core';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { LoaderPage } from '../../../../shared/components/loader-page/loader-page';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { BuissnesPage } from '../../../../shared/components/buissnes-page/buissnes-page';
import { ScopePage } from '../../../../shared/components/scope-page/scope-page';
import { CtaPage } from '../../../../shared/components/cta-page/cta-page';
import { MiniHeroPage } from '../../../../shared/components/mini-hero-page/mini-hero-page';
import { BenefitsPage } from '../../../../shared/components/benefits-page/benefits-page';
import { TargetPage } from '../../../../shared/components/target-page/target-page';

@Component({
  selector: 'app-web-service-page',
  imports: [
    LoaderPage,
    HeroPage,
    BuissnesPage,
    ScopePage,
    CtaPage,
    MiniHeroPage,
    BenefitsPage,
    TargetPage,
  ],
  templateUrl: './web-service-page.html',
  styleUrl: './web-service-page.scss',
})
export class WebServicePage implements OnInit {
  webServiceData: ServicePageInterface | null | undefined = null;
  isActive: boolean = false;

  constructor(private api: ApiBackendCMSService) {}

  ngOnInit(): void {
    this.api.getPageData('strony-internetowe').subscribe({
      next: (data) => {
        this.webServiceData = data;
        this.isActive = true;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.isActive = false;
      },
    });
  }
}
