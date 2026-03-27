import { Component, OnInit } from '@angular/core';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { BuissnesPage } from '../../../../shared/components/buissnes-page/buissnes-page';
import { ScopePage } from '../../../../shared/components/scope-page/scope-page';

@Component({
  selector: 'app-graphic-page',
  imports: [HeroPage, BuissnesPage, ScopePage],
  templateUrl: './graphic-page.html',
  styleUrl: './graphic-page.scss',
})
export class GraphicPage implements OnInit {
  isLoading = false;
  pageData: ServicePageInterface | null = null;

  constructor(private api: ApiBackendCMSService) {}

  ngOnInit(): void {
    this.api.getPageData('projekty-graficzne').subscribe({
      next: (item) => {
        this.pageData = item;
        this.isLoading = true;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
}
