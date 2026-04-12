import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { enviroment } from '../../../enviroment';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    dataLayer: IArguments[];
    gtag: (...args: unknown[]) => void;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private initialized = false;
  private readonly measurementId = enviroment.googleAnalyticsId;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  init(): void {
    if (!this.isBrowser) return;
    if (!this.measurementId) return;
    if (this.initialized) return;

    this.initialized = true;

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
      window.dataLayer.push(arguments as unknown as never);
    };

    const existngScript = this.document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${this.measurementId}"]`,
    );
    if (!existngScript) {
      const script = this.document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      this.document.head.appendChild(script);
    }

    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });

    window.gtag('js', new Date());

    window.gtag('config', this.measurementId, {
      anonymize_ip: true,
      send_page_view: false,
    });
  }
  enableAnalytics(): void {
    if (!this.isBrowser || !window.gtag) return;

    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });

    window.gtag('config', this.measurementId, {
      anonymize_ip: true,
      send_page_view: false,
    });
  }

  disableAnalytics(): void {
    if (!this.isBrowser || !window.gtag) return;

    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }

  trackPageView(path: string, title?: string): void {
    if (!this.isBrowser || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title ?? this.document.title,
    });
  }

  trackEvent(eventName: string, params?: Record<string, unknown>): void {
    if (!this.isBrowser || !window.gtag) return;

    window.gtag('event', eventName, params ?? {});
  }
}
