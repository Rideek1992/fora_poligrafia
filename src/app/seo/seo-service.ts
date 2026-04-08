import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SeoInterface } from '../core/models/seo-interface';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  updateSeo(seo: SeoInterface): void {
    this.titleService.setTitle(seo.title);
    this.metaService.updateTag({ name: 'description', content: seo.description });
    this.metaService.updateTag({ name: 'keywords', content: seo.keywords || '' });
    this.metaService.updateTag({ name: 'robots', content: seo.robots || 'index, follow' });
    this.metaService.updateTag({ name: 'og:title', content: seo.title });
    this.metaService.updateTag({ name: 'og:description', content: seo.description });
    this.metaService.updateTag({ name: 'og:type', content: seo.type || 'website' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: seo.title });
    this.metaService.updateTag({ name: 'twitter:description', content: seo.description });
    this.metaService.updateTag({ name: 'twitter:image', content: seo.image || '' });
    this.updateCanonicalUrl(seo.canonical);
  }
  private updateCanonicalUrl(url?: string): void {
    if (!url) return;

    let link = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
