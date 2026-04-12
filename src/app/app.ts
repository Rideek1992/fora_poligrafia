import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuDesctop } from './layout/menu-desctop/menu-desctop';
import { Footer } from './layout/footer/footer';
import { SeoService } from './seo/seo-service';
import { filter, map } from 'rxjs';
import { SeoInterface } from './core/models/seo-interface';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { MenuMobile } from './layout/menu-mobile/menu-mobile';
import { AnalyticsService } from './core/services/analytics.service';
import { CookieConsentService } from './core/services/cookie-consent.service';
import { CookiePopup } from './shared/components/cookie-popup/cookie-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuDesctop, Footer, MenuMobile, CookiePopup],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements OnInit {
  cookieBannerVisible: boolean | null = null;
  schowCookieBanner = false;
  protected readonly title = signal('web');

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private serviceSeo: SeoService,
    private viewportScroller: ViewportScroller,
    private analytics: AnalyticsService,
    private cookie: CookieConsentService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.analytics.init();

    if (this.isBrowser) {
      this.restoreCookieConsentState();
    }

    this.route.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activeRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
      )
      .subscribe((route) => {
        const slug = route.snapshot.paramMap.get('slug');
        const category = route.snapshot.paramMap.get('category');

        // portfolio item ma SEO z CMS, więc nie nadpisujemy go z route.data
        if (slug && category) {
          return;
        }

        const seo = route.snapshot.data['seo'] as SeoInterface | undefined;

        if (seo) {
          this.serviceSeo.updateSeo(seo);
        }

        if (this.cookie.hasAnalyticsConsent()) {
          this.analytics.trackPageView(this.route.url);
        }
      });
  }
  acceptCookies(): void {
    this.cookie.saveConsentSettings({
      necessary: true,
      analytics: true,
      marketing: false,
      functional: false,
    });
    this.analytics.enableAnalytics();
    this.cookieBannerVisible = false;
    this.analytics.trackPageView(this.route.url);
  }

  rejectCookies(): void {
    this.cookie.saveConsentSettings({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    this.analytics.disableAnalytics();
    this.cookieBannerVisible = false;
  }

  private restoreCookieConsentState(): void {
    const settings = this.cookie.getConsentSettings();

    if (!settings) {
      this.analytics.disableAnalytics();
      this.cookieBannerVisible = true;
      return;
    }
    if (settings.analytics) {
      this.analytics.enableAnalytics();
    } else {
      this.analytics.disableAnalytics();
    }

    this.cookieBannerVisible = false;
  }
}
