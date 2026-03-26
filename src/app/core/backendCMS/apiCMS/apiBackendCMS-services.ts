import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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
}
