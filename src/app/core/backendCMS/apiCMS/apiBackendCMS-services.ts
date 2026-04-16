import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ServicePageInterface } from '../../models/service-page-interface';
import { enviroment } from '../../../../enviroment';
import {
  PoliticPrivateInterface,
  PoliticPrivateResponseInterface,
} from '../../models/politic-private-interface';
import { FQASection } from '../../models/FQA-section-interface';
import { PortfolioInterface, PortfolioResponseInterface } from '../../models/portfolio-interface';
import {
  LandingPageInterface,
  LandingPageResponseInterface,
} from '../../models/landing-page-interface';

export interface ServicePageResponseInterface {
  data: ServicePageInterface[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class ApiBackendCMSService {
  private http = inject(HttpClient);
  private apiUrl = enviroment.apiUrl;

  // funkcje do pobrania danych

  getFullPageData(slug: string) {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}&populate[heroSection][populate][primaryButton]=*&populate[heroSection][populate][secondaryButton]=*&populate[heroSection][populate][imageSection][populate]=*&populate[businessSection][populate]=*&populate[scopeSection][populate][items][populate]=*&populate[benefitsSection][populate]=*&populate[targetSection][populate][items][populate]=*&populate[ctaSection][populate]=*&populate[miniHeroSection][populate]=*`;

    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => response.data[0] ?? null));
  }

  // agregacja funkcji do pobrania danych

  getPageData(slug: string): Observable<any> {
    return this.getFullPageData(slug);
  }

  getPoliticPrivacy(): Observable<PoliticPrivateInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-privacy-politics`;
    return this.http
      .get<PoliticPrivateResponseInterface>(url)
      .pipe(map((response) => response.data[0] ?? null));
  }

  getFQAData(slug: string): Observable<FQASection | null> {
    const url = `${this.apiUrl}/api/fora-pg-fqas?filters[pageName][$eq]=${slug}&populate=*`;

    return this.http
      .get<{ data: FQASection[]; meta: any }>(url)
      .pipe(map((response) => response.data[0] ?? null));
  }

  // funkcje dla seckji portfolio

  getPortfolioData(): Observable<PortfolioInterface[]> {
    const url = `${this.apiUrl}/api/fora-pg-portfolios?populate[coverImage][populate]=*&populate[seo][populate]=*&populate[galery][populate]=*`;

    return this.http.get<PortfolioResponseInterface>(url).pipe(
      map((response) => {
        return response.data ?? [];
      }),
    );
  }

  getOneElementPortfolio(slug: string): Observable<PortfolioInterface[]> {
    const url = `${this.apiUrl}/api/fora-pg-portfolios?filters[slugName][$eq]=${slug}&populate[coverImage][populate]=*&populate[seo][populate]=*&populate[galery][populate]=*`;

    return this.http.get<PortfolioResponseInterface>(url).pipe(
      map((response) => {
        return response.data ?? [];
      }),
    );
  }

  getLandingPageData(slug: string): Observable<LandingPageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-landing-page-cmses?filters[slug][$eq]=${slug}&populate[SEO][populate]=*&populate[heroSection][populate]=*&populate[introSection][populate][image][populate]=*&populate[introSection][populate][items][populate]=*&populate[servicesSection][populate][items][populate]=*&populate[benefitSection][populate][items][populate]=*&populate[processSection][populate][steps][populate]=*&populate[targetSection][populate][items][populate]=*&populate[portfolioSection][populate][item][populate]=*&populate[FQASection][populate][item][populate]=*&populate[CTASection][populate]=*`;

    return this.http
      .get<LandingPageResponseInterface>(url)
      .pipe(map((response) => response.data[0] ?? null));
  }
}
