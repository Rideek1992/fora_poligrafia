import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface CookieConsentSettings {
  necessary: true;
  marketing: boolean;
  functional: boolean;
  analytics: boolean;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private readonly storageKey = 'fora-cookie-consent';
  private readonly consentValidityDays = 30;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getConsentSettings(): CookieConsentSettings | null {
    if (!this.isBrowser) {
      return null;
    }
    const value = localStorage.getItem(this.storageKey);

    if (!value) return null;

    try {
      const parsed = JSON.parse(value) as CookieConsentSettings;

      if (
        parsed?.necessary !== true ||
        typeof parsed?.analytics !== 'boolean' ||
        typeof parsed?.marketing !== 'boolean' ||
        typeof parsed?.functional !== 'boolean' ||
        !parsed?.updatedAt
      ) {
        this.clear();
        return null;
      }

      if (this.isExpired(parsed.updatedAt)) {
        this.clear();
        return null;
      }
      return parsed;
    } catch {
      this.clear();
      return null;
    }
  }
  saveConsentSettings(settings: Omit<CookieConsentSettings, 'updatedAt'>): void {
    if (!this.isBrowser) return;

    const payload: CookieConsentSettings = {
      ...settings,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(this.storageKey, JSON.stringify(payload));
  }

  hasAnalyticsConsent(): boolean {
    const settings = this.getConsentSettings();
    return settings?.analytics === true;
  }

  hasUserMadeChoice(): boolean {
    return this.getConsentSettings() !== null;
  }

  clear(): void {
    if (!this.isBrowser) return;
    localStorage.removeItem(this.storageKey);
  }

  private isExpired(updatedAt: string): boolean {
    const savedDate = new Date(updatedAt);
    const now = new Date();

    const diffMs = now.getTime() - savedDate.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    return diffDays >= this.consentValidityDays;
  }
}
