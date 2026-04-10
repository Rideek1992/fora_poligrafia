import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiBackendCMSService } from '../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { PortfolioInterface } from '../../core/models/portfolio-interface';
import { enviroment } from '../../../enviroment';
import { ButtonLink } from '../../shared/components/button-link/button-link';
import { MarkdownComponent } from 'ngx-markdown';
import { SchemaService } from '../../seo/schema/schema.service';
import { createItemPortfolioSchema } from '../../seo/schema/create.schema';
import { MiniHeroPage } from '../../shared/components/mini-hero-page/mini-hero-page';

@Component({
  selector: 'app-portfolio-item',
  imports: [ButtonLink, MarkdownComponent, MiniHeroPage],
  templateUrl: './portfolio-item.html',
  styleUrl: './portfolio-item.scss',
})
export class PortfolioItem implements OnInit {
  itemPortfolioData: PortfolioInterface[] = [];
  itemPortfolioSingle: PortfolioInterface | null = null;
  addresUrl = enviroment.apiUrl;
  activeImageIndex: number = -1;
  tagsList: string[] = [];
  dataportfolio: any = [];

  constructor(
    private route: ActivatedRoute,
    private api: ApiBackendCMSService,
    private schema: SchemaService,
  ) {}

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category');
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      return;
    }

    this.api.getOneElementPortfolio(slug).subscribe({
      next: (data) => {
        this.itemPortfolioData = data ?? [];
        this.itemPortfolioSingle = data?.[0] ?? null;
        this.tagsList = this.itemPortfolioSingle?.tags
          ? this.itemPortfolioSingle.tags
              .split(',')
              .map((tag) => tag.trim())
              .filter(Boolean)
          : [];
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.api.getPageData('portfolio').subscribe({
      next: (data) => {
        this.dataportfolio = data;
        console.log(this.dataportfolio);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.schema.updateSchema(
      createItemPortfolioSchema({
        title: this.itemPortfolioSingle?.title ?? '',
        description: this.itemPortfolioSingle?.shortDescription ?? '',
        url: `https://fora-poligrafia.pl/portfolio/${this.itemPortfolioSingle?.categoryPage}/${this.itemPortfolioSingle?.slugName}`,
        categoryName: this.itemPortfolioSingle?.categoryPage,
        categoryUrl: `https://fora-poligrafia.pl/portfolio#${this.itemPortfolioSingle?.categoryPage}`,
        image: `https://fora-poligrafia.pl${this.itemPortfolioSingle?.coverImage.image.url}`,
      }),
    );
  }

  openPhotoSwipe(index: number) {
    if (index === -1) {
      this.activeImageIndex = -1;
      document.body.classList.remove('modal-open');
      return;
    }

    this.activeImageIndex = index;
    document.body.classList.add('modal-open');
  }
}
