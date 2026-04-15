import { Component, OnInit } from '@angular/core';
import { ApiBackendCMSService } from '../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { ActivatedRoute } from '@angular/router';
import { LandingPageInterface } from '../../core/models/landing-page-interface';
import { HeroLanding } from '../components/hero-landing/hero-landing';
import { IntroLanding } from '../components/intro-landing/intro-landing';
import { ServicesLanding } from '../components/services-landing/services-landing';
import { BenefitsLanding } from '../components/benefits-landing/benefits-landing';
import { ProccessLanding } from '../components/proccess-landing/proccess-landing';
import { TargetLanding } from '../components/target-landing/target-landing';
import { PortfolioLanding } from '../components/portfolio-landing/portfolio-landing';
import { FqaLanding } from '../components/fqa-landing/fqa-landing';
import { CtaPage } from '../../shared/components/cta-page/cta-page';
import { SeoService } from '../../seo/seo-service';
import { SeoInterface } from '../../core/models/seo-interface';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroLanding,
    IntroLanding,
    ServicesLanding,
    BenefitsLanding,
    ProccessLanding,
    TargetLanding,
    PortfolioLanding,
    FqaLanding,
    CtaPage,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements OnInit {
  slug: string | null = null;

  landingPageData: LandingPageInterface | null = null;

  constructor(
    private apiCMS: ApiBackendCMSService,
    private route: ActivatedRoute,
    private serviceSeo: SeoService,
  ) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');

    if (!this.slug) {
      return;
    }

    this.apiCMS.getLandingPageData(this.slug).subscribe({
      next: (data: LandingPageInterface | null) => {
        this.landingPageData = data;

        if (data?.SEO) {
          const seoData: SeoInterface = {
            title: data?.SEO?.metaTitle,
            description: data?.SEO?.metaDescription,
            keywords: data?.SEO?.metaKeywords,
          };
          this.serviceSeo.updateSeo(seoData);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
