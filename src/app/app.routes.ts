import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then((m) => m.HomePage),
    data: {
      seo: {
        title: 'FORA Poligrafia | Poligrafia, projekty graficzne i strony internetowe dla firm',
        description:
          'Wspieramy firmy w zakresie poligrafii, projektów graficznych, identyfikacji wizualnej i stron internetowych. FORA Poligrafia – obsługa firm z Legionowa, Warszawy i okolic.',
        keywords:
          'fora poligrafia, poligrafia dla firm, projekty graficzne dla firm, identyfikacja wizualna, strony internetowe dla firm, legionowo, warszawa',
        canonical: 'https://fora-poligrafia.pl',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'kontakt',
    loadComponent: () =>
      import('./features/contact/pages/contact-page/contact-page').then((m) => m.ContactPage),
    data: {
      seo: {
        title: 'Kontakt | FORA Poligrafia',
        description:
          'Skontaktuj się z nami i zapytaj o wycenę projektów graficznych, poligrafii firmowej, stron internetowych lub identyfikacji wizualnej. Działamy dla firm z Legionowa, Warszawy i okolic.',
        keywords:
          'kontakt fora poligrafia, zapytanie ofertowe poligrafia, projekty graficzne kontakt, strony internetowe kontakt',
        canonical: 'https://fora-poligrafia.pl/kontakt',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'projekty-graficzne',
    loadComponent: () =>
      import('./features/graphic/pages/graphic-page/graphic-page').then((m) => m.GraphicPage),
    data: {
      seo: {
        title: 'Projekty graficzne dla firm | FORA Poligrafia',
        description:
          'Tworzymy projekty graficzne dla firm: materiały reklamowe, grafiki do druku i projekty użytkowe dopasowane do marki. Obsługujemy firmy z Legionowa, Warszawy i okolic.',
        keywords:
          'projekty graficzne dla firm, grafika reklamowa, projekty do druku, projektowanie graficzne b2b, legionowo, warszawa',
        canonical: 'https://fora-poligrafia.pl/projekty-graficzne',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'poligrafia-firmowa',
    loadComponent: () =>
      import('./features/printing-company/pages/printing-page/printing-page').then(
        (m) => m.PrintingPage,
      ),
    data: {
      seo: {
        title: 'Poligrafia firmowa | Druk dla firm | FORA Poligrafia',
        description:
          'Realizujemy poligrafię firmową dla biznesu: materiały drukowane, elementy wspierające sprzedaż i codzienną komunikację marki. FORA Poligrafia – Legionowo, Warszawa i okolice.',
        keywords:
          'poligrafia firmowa, druk dla firm, materiały drukowane dla firm, druk materiałów reklamowych, legionowo, warszawa',
        canonical: 'https://fora-poligrafia.pl/poligrafia-firmowa',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'identyfikacja-wizualna',
    loadComponent: () =>
      import('./features/visual-identity/pages/visual-identity-page/visual-identity-page').then(
        (m) => m.VisualIdentityPage,
      ),
    data: {
      seo: {
        title: 'Identyfikacja wizualna dla firm | FORA Poligrafia',
        description:
          'Projektujemy identyfikację wizualną dla firm, które chcą budować spójny i profesjonalny wizerunek marki. Tworzymy rozwiązania dopasowane do biznesu i komunikacji marki.',
        keywords:
          'identyfikacja wizualna dla firm, branding firmy, spójny wizerunek marki, projekt identyfikacji wizualnej',
        canonical: 'https://fora-poligrafia.pl/identyfikacja-wizualna',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'strony-internetowe',
    loadComponent: () =>
      import('./features/web-service/pages/web-service-page/web-service-page').then(
        (m) => m.WebServicePage,
      ),
    data: {
      seo: {
        title: 'Strony internetowe dla firm | FORA Poligrafia',
        description:
          'Tworzymy nowoczesne strony internetowe dla firm: przejrzyste, szybkie i dopasowane do sprzedaży oraz prezentacji oferty. Obsługujemy firmy z Legionowa, Warszawy i okolic.',
        keywords:
          'strony internetowe dla firm, tworzenie stron www dla firm, projektowanie stron internetowych, strony www b2b, legionowo, warszawa',
        canonical: 'https://fora-poligrafia.pl/strony-internetowe',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'analiza-danych',
    loadComponent: () =>
      import('./features/data-analitics/pages/data-analitic-page/data-analitic-page').then(
        (m) => m.DataAnaliticPage,
      ),
    data: {
      seo: {
        title: 'Analiza danych dla firm | Dashboardy i raporty | FORA Poligrafia',
        description:
          'Pomagamy firmom porządkować dane, tworzyć raporty i budować czytelne dashboardy wspierające decyzje biznesowe. Pracujemy z danymi w praktyczny i uporządkowany sposób.',
        keywords:
          'analiza danych dla firm, dashboardy dla firm, raporty biznesowe, porządkowanie danych, analiza excel, power bi',
        canonical: 'https://fora-poligrafia.pl/analiza-danych',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'uslugi-dronowe',
    loadComponent: () =>
      import('./features/dorne-services/pages/drone-service-page/drone-service-page').then(
        (m) => m.DroneServicePage,
      ),
    data: {
      seo: {
        title: 'Usługi dronowe dla firm | Zdjęcia i filmy z powietrza | FORA Poligrafia',
        description:
          'Realizujemy usługi dronowe dla firm: zdjęcia i filmy z powietrza do promocji, prezentacji obiektów i materiałów marketingowych. Działamy w Legionowie, Warszawie i okolicach.',
        keywords:
          'usługi dronowe dla firm, zdjęcia dronem dla firm, filmy z drona, dron legionowo, dron warszawa',
        canonical: 'https://fora-poligrafia.pl/uslugi-dronowe',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'polityka-prywatnosci',
    loadComponent: () =>
      import('./features/privaty-policy/pages/private-policy-page/private-policy-page').then(
        (m) => m.PrivatePolicyPage,
      ),
    data: {
      seo: {
        title: 'Polityka prywatności | FORA Poligrafia',
        description:
          'Zapoznaj się z polityką prywatności FORA Poligrafia i sprawdź, w jaki sposób przetwarzamy dane osobowe oraz zabezpieczamy informacje przekazywane przez użytkowników strony.',
        keywords: 'polityka prywatności fora poligrafia, dane osobowe, przetwarzanie danych',
        canonical: 'https://fora-poligrafia.pl/polityka-prywatnosci',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'ustawienia-prywatnosci',
    loadComponent: () =>
      import('./features/privaty-settings/privaty-settings').then((m) => m.PrivatySettings),
    data: {
      seo: {
        title: 'Ustawienia prywatności i cookies | FORA Poligrafia',
        description:
          'Sprawdź i zarządzaj ustawieniami prywatności oraz zgodami na pliki cookies w serwisie FORA Poligrafia. Tutaj możesz zmienić zgody dotyczące analityki i innych technologii.',
        keywords:
          'ustawienia prywatności, ustawienia cookies, zgody cookies, zarządzanie zgodami, polityka prywatności, fora poligrafia',
        canonical: 'https://fora-poligrafia.pl/ustawienia-prywatnosci',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./features/portfiolio/pages/portfolio-page/portfolio-page').then(
        (m) => m.PortfolioPage,
      ),
    data: {
      seo: {
        title: 'Portfolio | Realizacje FORA Poligrafia',
        description:
          'Zobacz wybrane realizacje FORA Poligrafia i sprawdź, jak pracujemy nad projektami graficznymi, poligrafią firmową, identyfikacją wizualną i materiałami dla biznesu.',
        keywords:
          'portfolio poligrafia, realizacje graficzne, realizacje dla firm, portfolio projektów graficznych',
        canonical: 'https://fora-poligrafia.pl/portfolio',
        robots: 'index, follow',
        type: 'website',
      },
    },
  },
  {
    path: 'portfolio/:category/:slug',
    loadComponent: () =>
      import('./features/portfolio-item/portfolio-item').then((m) => m.PortfolioItem),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-page/pages/not-page/not-page').then((m) => m.NotPage),
    data: {
      seo: {
        title: 'Strona nie została znaleziona | FORA Poligrafia',
        description:
          'Nie udało się odnaleźć wskazanej strony. Wróć do strony głównej FORA Poligrafia i sprawdź dostępne usługi oraz realizacje.',
        keywords: '404 fora poligrafia, strona nie została znaleziona',
        canonical: 'https://fora-poligrafia.pl/404',
        robots: 'noindex, nofollow',
        type: 'website',
      },
    },
  },
];
