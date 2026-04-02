export interface HeroSectionInterface {
  eyebrow: string;
  title: string;
  description: string;
  subtitle: string;
  imageSection: ImageSection | null;
  primaryButton: PrimaryButton | null;
  secondaryButton: SecondaryButton | null;
}

export interface ImageSection {
  id: number;
  images: MediaItem[];
  imageAlt: string | null;
  alternativeText: string | null;
}

export interface MediaItem {
  id: number;
  url: string;
  alternativeText: string | null;
  name?: string;
  mime?: string;
  width?: number;
  height?: number;
}

export interface PrimaryButton {
  text: string;
  link: string;
  idLink?: string;
}

export interface SecondaryButton {
  text: string;
  link: string;
  idLink?: string;
}
