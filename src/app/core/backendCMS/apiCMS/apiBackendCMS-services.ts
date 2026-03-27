import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { ServicePageInterface } from '../../models/service-page-interface';
import { enviroment } from '../../../../enviroment';

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

  getMainData(slug: string): Observable<ServicePageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}`;
    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => (response.data.length ? response.data[0] : null)));
  }

  getHeroPages(slug: string): Observable<ServicePageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}&populate[heroSection][populate][primaryButton]=*&populate[heroSection][populate][secondaryButton]=*&populate[heroSection][populate][imageSection][populate]=*`;

    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => (response.data.length ? response.data[0] : null)));
  }

  getBusinnesPages(slug: string): Observable<ServicePageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}&populate[businessSection][populate]=*`;

    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => (response.data.length ? response.data[0] : null)));
  }

  getScopePage(slug: string): Observable<ServicePageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}&populate[scopeSection][populate][items][populate]=*`;

    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => (response.data.length ? response.data[0] : null)));
  }

  getBenefitsSection(slug: string): Observable<ServicePageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}&populate[benefitsSection][populate]=*`;

    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => (response.data.length ? response.data[0] : null)));
  }

  getTargetSection(slug: string): Observable<ServicePageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}&populate[targetSection][populate]=*`;

    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => (response.data.length ? response.data[0] : null)));
  }

  getCTASection(slug: string): Observable<ServicePageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}&populate[ctaSection][populate]=*`;

    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => (response.data.length ? response.data[0] : null)));
  }

  getMiniHeroSection(slug: string): Observable<ServicePageInterface | null> {
    const url = `${this.apiUrl}/api/fora-pg-cmses?filters[slug][$eq]=${slug}&populate[miniHeroSection][populate]=*`;

    return this.http
      .get<ServicePageResponseInterface>(url)
      .pipe(map((response) => (response.data.length ? response.data[0] : null)));
  }

  // agregacja funkcji do pobrania danych

  getPageData(slug: string): Observable<any> {
    return forkJoin({
      mainData: this.getMainData(slug),
      heroSection: this.getHeroPages(slug).pipe(map((data) => data?.heroSection)),
      businessSection: this.getBusinnesPages(slug).pipe(map((data) => data?.businessSection)),
      scopeSection: this.getScopePage(slug).pipe(map((data) => data?.scopeSection)),
      benefitsSection: this.getBenefitsSection(slug).pipe(map((data) => data?.benefitsSection)),
      targetSection: this.getTargetSection(slug).pipe(map((data) => data?.targetSection)),
      ctaSection: this.getCTASection(slug).pipe(map((data) => data?.ctaSection)),
      miniHeroSection: this.getMiniHeroSection(slug).pipe(map((data) => data?.miniHeroSection)),
    });
  }
}
