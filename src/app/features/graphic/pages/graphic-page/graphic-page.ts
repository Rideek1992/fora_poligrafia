import { Component, OnInit } from '@angular/core';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { ServicePageInterface } from '../../../../core/models/service-page-interface';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { BuissnesPage } from '../../../../shared/components/buissnes-page/buissnes-page';

@Component({
  selector: 'app-graphic-page',
  imports: [HeroPage, BuissnesPage],
  templateUrl: './graphic-page.html',
  styleUrl: './graphic-page.scss',
})
export class GraphicPage implements OnInit {
  sectionElement: ServicePageInterface | null = null;
  buisnessElemnt: ServicePageInterface | null = null;
  isLoading = false;

  constructor(private api: ApiBackendCMSService) {}

  ngOnInit(): void {
    this.api.getHeroPages('projekty-graficzne').subscribe({
      next: (item) => {
        this.sectionElement = item;
        this.isLoading = true;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });

    this.api.getBusinnesPages('projekty-graficzne').subscribe({
      next: (item) => {
        this.buisnessElemnt = item;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
