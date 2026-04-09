import { Component, OnInit } from '@angular/core';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { LoaderPage } from '../../../../shared/components/loader-page/loader-page';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { BuissnesPage } from '../../../../shared/components/buissnes-page/buissnes-page';
import { ScopePage } from '../../../../shared/components/scope-page/scope-page';
import { BenefitsPage } from '../../../../shared/components/benefits-page/benefits-page';
import { MiniHeroPage } from '../../../../shared/components/mini-hero-page/mini-hero-page';
import { TargetPage } from '../../../../shared/components/target-page/target-page';
import { CtaPage } from '../../../../shared/components/cta-page/cta-page';
import { SchemaService } from '../../../../seo/schema/schema.service';
import { ELEMENTS_SCHEMA } from '../../../../seo/schema/elements.schema';
import { createServiceSchema } from '../../../../seo/schema/create.schema';

@Component({
  selector: 'app-data-analitic-page',
  imports: [
    LoaderPage,
    HeroPage,
    BuissnesPage,
    ScopePage,
    BenefitsPage,
    MiniHeroPage,
    TargetPage,
    CtaPage,
  ],
  templateUrl: './data-analitic-page.html',
  styleUrl: './data-analitic-page.scss',
})
export class DataAnaliticPage implements OnInit {
  dataAnaliticData: ServicePageInterface | null = null;
  isActive: boolean = false;

  constructor(
    private api: ApiBackendCMSService,
    private schemaService: SchemaService,
  ) {}

  ngOnInit(): void {
    this.schemaService.updateSchema(createServiceSchema(ELEMENTS_SCHEMA.analizaDanychPage));
    this.api.getPageData('analiza-danych').subscribe({
      next: (data) => {
        this.dataAnaliticData = data;
        this.isActive = true;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.isActive = false;
      },
    });
  }
}
