import { MediaItem } from './hero-section-interface';

export interface BenefitSectionInterface {
  title: string;
  description: string;
  itemBenefits: BenefitItemInterface[];
}

export interface BenefitItemInterface {
  title: string;
  description: string;
  icon: string;
  image: MediaItem | null;
}
