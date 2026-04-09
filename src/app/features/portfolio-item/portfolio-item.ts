import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiBackendCMSService } from '../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { PortfolioInterface } from '../../core/models/portfolio-interface';
import { enviroment } from '../../../enviroment';
import { ButtonLink } from '../../shared/components/button-link/button-link';
import { MarkdownComponent } from 'ngx-markdown';
import { SchemaService } from '../../seo/schema/schema.service';
import { createItemPortfolioSchema } from '../../seo/schema/create.schema';

@Component({
  selector: 'app-portfolio-item',
  imports: [ButtonLink, MarkdownComponent],
  templateUrl: './portfolio-item.html',
  styleUrl: './portfolio-item.scss',
})
export class PortfolioItem implements OnInit {
  itemPortfolioData: PortfolioInterface[] = [];
  itemPortfolioSingle: PortfolioInterface | null = null;
  addresUrl = enviroment.apiUrl;

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
}
