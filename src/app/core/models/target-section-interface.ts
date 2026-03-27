import { MediaItem } from './hero-section-interface';

export interface TargetSectionInterface {
  title: string;
  description: string;
  items: ItemTargetSectionInterface[];
}

export interface ItemTargetSectionInterface {
  title: string;
  description: string;
  icon: string;
  image: MediaItem | null;
  markdownText: string;
}
