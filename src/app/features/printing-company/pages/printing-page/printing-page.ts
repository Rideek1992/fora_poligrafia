import { Component, OnInit } from '@angular/core';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { BuissnesPage } from '../../../../shared/components/buissnes-page/buissnes-page';
import { ScopePage } from '../../../../shared/components/scope-page/scope-page';
import { BenefitsPage } from '../../../../shared/components/benefits-page/benefits-page';
import { TargetPage } from '../../../../shared/components/target-page/target-page';
import { MiniHeroPage } from '../../../../shared/components/mini-hero-page/mini-hero-page';
import { CtaPage } from '../../../../shared/components/cta-page/cta-page';
import { LoaderPage } from '../../../../shared/components/loader-page/loader-page';
import { SchemaService } from '../../../../seo/schema/schema.service';
import { ELEMENTS_SCHEMA } from '../../../../seo/schema/elements.schema';
import { createServiceSchema } from '../../../../seo/schema/create.schema';

@Component({
  selector: 'app-printing-page',
  imports: [
    HeroPage,
    BuissnesPage,
    ScopePage,
    BenefitsPage,
    TargetPage,
    MiniHeroPage,
    CtaPage,
    LoaderPage,
  ],
  templateUrl: './printing-page.html',
  styleUrl: './printing-page.scss',
})
export class PrintingPage implements OnInit {
  dataPrint: ServicePageInterface | null = null;
  isLoading = false;

  constructor(
    private api: ApiBackendCMSService,
    private schemaService: SchemaService,
  ) {}

  ngOnInit(): void {
    this.schemaService.updateSchema(createServiceSchema(ELEMENTS_SCHEMA.poligrafiaFirmowaPage));

    this.api.getPageData('poligrafia-firmowa').subscribe({
      next: (item) => {
        this.dataPrint = item;
        this.isLoading = true;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
}
