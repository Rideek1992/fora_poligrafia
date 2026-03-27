import { MediaItem } from './hero-section-interface';

export interface MiniHeroSectionInterface {
  eyebrow: string;
  title: string;
  description: string;
  image: MediaItem | null;
  buttonText: string;
  buttonLink: string;
}
