import { HeroSectionInterface } from './hero-section-interface';
import { BusinnesSectionInterface } from './businnes-section-interface';
import { ScopeSectionInterface } from './scope-section-interface';
import { BenefitSectionInterface } from './benefit-section-interface';
import { TargetSectionInterface } from './target-section-interface';
import { CtaSectionInterface } from './cta-section-interface';
import { MiniHeroSectionInterface } from './mini-hero-section-interface';

export interface ServicePageInterface {
  title: string;
  slug: string;
  menuLabel: string;
  shortDescription: string;
  isActive: boolean;
  heroSection: HeroSectionInterface | null;
  businessSection: BusinnesSectionInterface | null;
  scopeSection: ScopeSectionInterface | null;
  benefitsSection: BenefitSectionInterface | null;
  targetSection: TargetSectionInterface | null;
  ctaSection: CtaSectionInterface | null;
  miniHeroSection: MiniHeroSectionInterface | null;
}
