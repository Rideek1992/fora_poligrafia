export interface LandingPageResponseInterface {
  data: LandingPageInterface[];
}

export interface LandingPageInterface {
  title: string;
  slug: string;
  shortDescription: string;
  isActive: boolean;
  layoutView: string;
  activeFrom: string | null;
  activeTo: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  SEO: LandingPageSeoInterface | null;
  heroSection: LandingPageHeroSectionInterface | null;
  introSection: LandingPageIntroSectionInterface | null;
  servicesSection: LandingPageServiceSectionInterface | null;
  benefitSection: LandingPageBenefitsSectionInterface | null;
  processSection: LandingPageProcessSectionInterface | null;
  targetSection: LandingPageTargetSectionInterface | null;
  portfolioSection: LandingPagePortfolioSectionInterface | null;
  FQASection: LaningPageFQASectionInterface | null;
  CTASection: LanindgPageCTASectionInterface | null;
}

export interface LandingPageSeoInterface {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface LandingPageHeroSectionInterface {
  showSection: boolean;
  title: string;
  eyebrow: string;
  subTitle: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
  buttonID: string;
  imageAlt: string;
  image: LandingPageImageInterface | null;
}

export interface LandingPageIntroSectionInterface {
  showSection: boolean;
  title: string;
  description: string;
  eyebrow: string;
  additionalText: string;
  image: LandingPageImageInterface | null;
  items: LandingPageItemsInterface[] | null;
}

export interface LandingPageServiceSectionInterface {
  showSection: boolean;
  eyebrow: string;
  title: string;
  description: string;
  items: LandingPageItemsInterface[] | null;
}

export interface LandingPageBenefitsSectionInterface {
  showSection: boolean;
  eyebrow: string;
  title: string;
  description: string;
  variant: string;
  items: LandingPageItemsInterface[] | null;
}

export interface LandingPageProcessSectionInterface {
  showSection: boolean;
  eyebrow: string;
  title: string;
  description: string;
  steps: LandingPageItemsInterface[] | null;
}

export interface LandingPageTargetSectionInterface {
  showSection: boolean;
  eyebrow: string;
  title: string;
  description: string;
  items: LandingPageItemsInterface[] | null;
}

export interface LandingPagePortfolioSectionInterface {
  showSection: boolean;
  eyebrow: string;
  title: string;
  description: string;
  item: LandingPageItemsInterface[] | null;
}

export interface LaningPageFQASectionInterface {
  showSection: boolean;
  eyebrow: string;
  title: string;
  description: string;
  item: FQAItemsInerface[] | null;
}

export interface LanindgPageCTASectionInterface {
  showSection: boolean;
  eyebrow: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  buttonID?: string;
}

export interface FQAItemsInerface {
  question: string;
  anwser: string;
}

export interface LandingPageItemsInterface {
  id?: number;
  title: string;
  description?: string;
  icon?: string;
  image?: LandingPageImageInterface | null;
  shortDescription?: string;
  longDescription?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonID?: string;
  imgAlt?: string;
  stemNumber?: number;
  conversationElement?: string;
}

export interface LandingPageImageInterface {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
  size: number;
  mime: string;
}
