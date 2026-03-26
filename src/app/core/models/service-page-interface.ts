import { HeroSectionInterface } from './hero-section-interface';
import { BusinnesSectionInterface } from './businnes-section-interface';

export interface ServicePageInterface {
  title: string;
  slug: string;
  menuLabel: string;
  shortDescription: string;
  isActive: boolean;
  heroSection: HeroSectionInterface | null;
  businessSection: BusinnesSectionInterface | null;
}
