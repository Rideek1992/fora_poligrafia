export type CookieSettingKey = 'necessary' | 'analytics' | 'marketing' | 'functional';

export interface CookieConsentSettings {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  updatedAt: string;
}

export const DATA_COOKIE: { name: string; slug: CookieSettingKey }[] = [
  {
    name: 'Niezbędne pliki cookie',
    slug: 'necessary',
  },
  {
    name: 'Analityczne pliki cookie',
    slug: 'analytics',
  },
  {
    name: 'Marketingowe pliki cookie',
    slug: 'marketing',
  },
  {
    name: 'Funkcjonalne pliki cookie',
    slug: 'functional',
  },
];
