import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { ApiBackendCMSService } from '../../core/backendCMS/apiCMS/apiBackendCMS-services';
import { ServicePageInterface } from '../../core/models/service-page-interface';
import { HeroPage } from '../../shared/components/hero-page/hero-page';
import { LoaderPage } from '../../shared/components/loader-page/loader-page';
import { DATA_COOKIE } from '../privaty-policy/pages/private-policy-page/data-cookies';
import { CookieConsentService } from '../../core/services/cookie-consent.service';
import { AnalyticsService } from '../../core/services/analytics.service';

export type CookieSettingKey = 'necessary' | 'analytics' | 'marketing' | 'functional';

export interface CookieConsentSettings {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  updatedAt: string;
}

@Component({
  selector: 'app-privaty-settings',
  imports: [HeroPage, LoaderPage, DatePipe],
  templateUrl: './privaty-settings.html',
  styleUrl: './privaty-settings.scss',
  standalone: true,
})
export class PrivatySettings implements OnInit {
  dataSettingsPolicy: ServicePageInterface | null = null;
  isLoading = false;
  cookieSettings: CookieConsentSettings | null = null;
  protected readonly DATA_COOKIE = DATA_COOKIE;

  constructor(
    private api: ApiBackendCMSService,
    private cookie: CookieConsentService,
    private analytics: AnalyticsService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.api.getPageData('ustawienia-prywatnosci').subscribe({
      next: (data) => {
        this.dataSettingsPolicy = data;
        this.isLoading = true;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });

    if (this.isBrowser) {
      this.cookieSettings = this.getCookieSettingsFromStorage();
      console.log(this.cookieSettings);
    }
  }

  getCookieStatus(slug: CookieSettingKey): boolean {
    if (!this.cookieSettings) return false;
    return this.cookieSettings[slug] === true;
  }

  enableAnalyticsConsent(): void {
    const currentSettings = this.cookieSettings;

    this.cookie.saveConsentSettings({
      necessary: true,
      analytics: true,
      marketing: currentSettings?.marketing ?? false,
      functional: currentSettings?.functional ?? false,
    });

    this.analytics.enableAnalytics();
    this.cookieSettings = this.getCookieSettingsFromStorage();
  }

  disableAnalyticsConsent(): void {
    const currentSettings = this.cookieSettings;

    this.cookie.saveConsentSettings({
      necessary: true,
      analytics: false,
      marketing: currentSettings?.marketing ?? false,
      functional: currentSettings?.functional ?? false,
    });

    this.analytics.disableAnalytics();
    this.cookieSettings = this.getCookieSettingsFromStorage();
  }

  private getCookieSettingsFromStorage(): CookieConsentSettings | null {
    const value = localStorage.getItem('fora-cookie-consent');

    if (!value) return null;

    try {
      const parsed = JSON.parse(value) as Partial<CookieConsentSettings>;

      return {
        necessary: true,
        analytics: parsed.analytics ?? false,
        marketing: parsed.marketing ?? false,
        functional: parsed.functional ?? false,
        updatedAt: parsed.updatedAt ?? '',
      };
    } catch {
      return null;
    }
  }
}
