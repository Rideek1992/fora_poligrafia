import { MediaItem } from './hero-section-interface';

export interface BusinnesSectionInterface {
  title: string;
  lead: string;
  items: dataItem[] | null;
}

export interface dataItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
  images?: MediaItem[];
}
