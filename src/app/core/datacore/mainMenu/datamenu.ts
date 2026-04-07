import { DataMenuInterface } from './datamenu-interface';

export const MENU_ELEMENTS: DataMenuInterface[] = [
  {
    name: 'Projekty graficzne',
    link: '/projekty-graficzne',
    active: true,
    icon: 'fa-duotone fa-thin fa-palette',
  },
  {
    name: 'Poligrafia firmowa',
    link: '/poligrafia-firmowa',
    active: true,
    icon: 'fa-duotone fa-thin fa-print',
  },
  {
    name: 'Identyfikacja wizualna',
    link: '/identyfikacja-wizualna',
    active: true,
    icon: 'fa-duotone fa-thin fa-pen-ruler',
  },
  {
    name: 'Strony internetowe',
    link: '/strony-internetowe',
    active: true,
    icon: 'fa-duotone fa-thin fa-globe',
  },
  {
    name: 'Analiza danych',
    link: '/analiza-danych',
    active: true,
    icon: 'fa-duotone fa-thin fa-chart-line',
  },
  {
    name: 'Usługi dronowe',
    link: '/uslugi-dronowe',
    active: true,
    icon: 'fa-duotone fa-thin fa-drone-front',
  },
];
