import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then((m) => m.HomePage),
  },
  {
    path: 'kontakt',
    loadComponent: () =>
      import('./features/contact/pages/contact-page/contact-page').then((m) => m.ContactPage),
  },
  {
    path: 'projekty-graficzne',
    loadComponent: () =>
      import('./features/graphic/pages/graphic-page/graphic-page').then((m) => m.GraphicPage),
  },
  {
    path: 'poligrafia-firmowa',
    loadComponent: () =>
      import('./features/printing-company/pages/printing-page/printing-page').then(
        (m) => m.PrintingPage,
      ),
  },
  {
    path: 'identyfikacja-wizualna',
    loadComponent: () =>
      import('./features/visual-identity/pages/visual-identity-page/visual-identity-page').then(
        (m) => m.VisualIdentityPage,
      ),
  },
  {
    path: 'strony-internetowe',
    loadComponent: () =>
      import('./features/web-service/pages/web-service-page/web-service-page').then(
        (m) => m.WebServicePage,
      ),
  },
  {
    path: 'analiza-danych',
    loadComponent: () =>
      import('./features/data-analitics/pages/data-analitic-page/data-analitic-page').then(
        (m) => m.DataAnaliticPage,
      ),
  },
  {
    path: 'uslugi-dronowe',
    loadComponent: () =>
      import('./features/dorne-services/pages/drone-service-page/drone-service-page').then(
        (m) => m.DroneServicePage,
      ),
  },
  {
    path: 'polityka-prywatnosci',
    loadComponent: () =>
      import('./features/privaty-policy/pages/private-policy-page/private-policy-page').then(
        (m) => m.PrivatePolicyPage,
      ),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./features/portfiolio/pages/portfolio-page/portfolio-page').then(
        (m) => m.PortfolioPage,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-page/pages/not-page/not-page').then((m) => m.NotPage),
  },
];
