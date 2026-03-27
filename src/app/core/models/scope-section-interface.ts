import { MediaItem } from './hero-section-interface';

export interface ScopeSectionInterface {
  title: string;
  description: string;
  items: ScopeItemInterface[];
}

export interface ScopeItemInterface {
  title: string;
  mainDescription: string;
  secondDescription: string;
  listElements: string;
  image: MediaItem | null;
}
