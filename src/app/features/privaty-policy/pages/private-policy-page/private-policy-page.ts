import { Component, OnInit } from '@angular/core';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { PoliticPrivateInterface } from '../../../../core/models/politic-private-interface';
import { MarkdownComponent } from 'ngx-markdown';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';

@Component({
  selector: 'app-private-policy-page',
  imports: [MarkdownComponent, HeroPage],
  templateUrl: './private-policy-page.html',
  styleUrl: './private-policy-page.scss',
})
export class PrivatePolicyPage implements OnInit {
  dataPolitic: PoliticPrivateInterface | null = null;
  dataPagePolitic: ServicePageInterface | null = null;

  constructor(private api: ApiBackendCMSService) {}

  ngOnInit(): void {
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
      },
      error: (err) => {},
    });
  }
}
