import { Component, OnInit } from '@angular/core';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { LoaderPage } from '../../../../shared/components/loader-page/loader-page';
import { RouterLink } from '@angular/router';
import { BuissnesPage } from '../../../../shared/components/buissnes-page/buissnes-page';
import { MiniHeroPage } from '../../../../shared/components/mini-hero-page/mini-hero-page';
import { FQASection } from '../../../../core/models/FQA-section-interface';
import { FqaSection } from '../../../../shared/components/fqa-section/fqa-section';
import { CtaPage } from '../../../../shared/components/cta-page/cta-page';
import { SchemaService } from '../../../../seo/schema/schema.service';
import { ELEMENTS_SCHEMA } from '../../../../seo/schema/elements.schema';

import { createPageSchema } from '../../../../seo/schema/create.schema';

@Component({
  selector: 'app-home-page',
  imports: [HeroPage, LoaderPage, RouterLink, BuissnesPage, MiniHeroPage, FqaSection, CtaPage],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  dataHome: ServicePageInterface | null | undefined = null;
  isActive: boolean = false;
  dataFQAHome: FQASection | null | undefined = null;

  constructor(
    private api: ApiBackendCMSService,
    private schemaService: SchemaService,
  ) {}

  ngOnInit() {
    console.log(ELEMENTS_SCHEMA.homePage);
    console.log(createPageSchema(ELEMENTS_SCHEMA.homePage));

    this.schemaService.updateSchema(createPageSchema(ELEMENTS_SCHEMA.homePage));

    this.api.getPageData('home').subscribe({
      next: (data) => {
        this.dataHome = data;
        this.isActive = true;
      },
      error: (err) => {
        console.log(err);
        this.isActive = false;
      },
    });

    this.api.getFQAData('home').subscribe({
      next: (data) => {
        this.dataFQAHome = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
