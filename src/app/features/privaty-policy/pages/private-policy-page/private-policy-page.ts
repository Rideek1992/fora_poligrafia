import { Component, OnInit } from '@angular/core';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { PoliticPrivateInterface } from '../../../../core/models/politic-private-interface';
import { MarkdownComponent } from 'ngx-markdown';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { ELEMENTS_SCHEMA } from '../../../../seo/schema/elements.schema';
import { createPageSchema } from '../../../../seo/schema/create.schema';
import { SchemaService } from '../../../../seo/schema/schema.service';
import { LoaderPage } from '../../../../shared/components/loader-page/loader-page';

@Component({
  selector: 'app-private-policy-page',
  imports: [MarkdownComponent, HeroPage, LoaderPage],
  templateUrl: './private-policy-page.html',
  styleUrl: './private-policy-page.scss',
  standalone: true,
})
export class PrivatePolicyPage implements OnInit {
  dataPolitic: PoliticPrivateInterface | null = null;
  dataPagePolitic: ServicePageInterface | null = null;
  isLoading = false;

  constructor(
    private api: ApiBackendCMSService,
    private SchemaService: SchemaService,
  ) {}

  ngOnInit(): void {
    this.SchemaService.updateSchema(createPageSchema(ELEMENTS_SCHEMA.politykaPrywatnosci));
    this.api.getPoliticPrivacy().subscribe({
      next: (data) => {
        this.dataPolitic = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.api.getPageData('polityka-prywatnosci').subscribe({
      next: (data) => {
        this.dataPagePolitic = data;
        this.isLoading = true;
      },
      error: (err) => {},
    });
  }
}
