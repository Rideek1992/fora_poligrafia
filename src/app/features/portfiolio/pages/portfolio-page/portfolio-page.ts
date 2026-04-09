import { Component, OnInit } from '@angular/core';
import { ApiBackendCMSService } from '../../../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { PortfolioInterface } from '../../../../core/models/portfolio-interface';
import { HeroPage } from '../../../../shared/components/hero-page/hero-page';
import { LoaderPage } from '../../../../shared/components/loader-page/loader-page';
import { NgIf } from '@angular/common';
import { enviroment } from '../../../../../enviroment';
import { Router } from '@angular/router';
import { ELEMENTS_SCHEMA } from '../../../../seo/schema/elements.schema';
import { createPageSchema } from '../../../../seo/schema/create.schema';
import { SchemaService } from '../../../../seo/schema/schema.service';

@Component({
  selector: 'app-portfolio-page',
  imports: [HeroPage, LoaderPage, NgIf],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss',
})
export class PortfolioPage implements OnInit {
  portfolioData: PortfolioInterface[] = [];
  dataSection: any = [];
  isActiveSection: boolean = false;
  isActivePortfolio: boolean = false;
  categotyElemetn: string[] = [];
  tagsList: string[] = [];
  activeCategory: string = '';
  addresApi: string = enviroment.apiUrl;

  mapCategoryElement = [
    {
      slug: 'projekty-graficzne',
      name: 'Projekty graficzne',
    },
    {
      slug: 'strony-internetowe',
      name: 'Strony internetowe',
    },
  ];

  constructor(
    private api: ApiBackendCMSService,
    private router: Router,
    private SchemaService: SchemaService,
  ) {}

  ngOnInit() {
    this.SchemaService.updateSchema(createPageSchema(ELEMENTS_SCHEMA.portfolioPage));
    this.api.getPageData('portfolio').subscribe(
      (data) => {
        this.dataSection = data;
        this.isActiveSection = true;
      },
      (err) => {
        console.log(err);
        this.isActiveSection = false;
      },
    );
    this.api.getPortfolioData().subscribe({
      next: (data) => {
        this.portfolioData = data.map((item) => ({
          ...item,
          tagLists: item.tags
            ? item.tags
                .split(',')
                .map((tag) => tag.trim())
                .filter(Boolean)
            : [],
        }));
        this.categotyElemetn = [...new Set(data?.map((item) => item.categoryPage))];
        this.tagsList = [...new Set(this.portfolioData.flatMap((item) => item.tagLists))];
        this.isActivePortfolio = true;
      },
      error: (err) => {
        console.log(err);
        this.isActivePortfolio = false;
      },
    });
  }

  getActiveCategory(category: string) {
    if (category === this.activeCategory) {
      this.activeCategory = '';
      return;
    }
    this.activeCategory = category;
  }

  goToPortfolio(item: PortfolioInterface) {
    this.router.navigate(['/portfolio', item.categoryPage, item.slugName]);
  }
}
