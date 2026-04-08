export interface PortfolioResponseInterface {
  data: PortfolioInterface[];
  meta?: any;
}

export interface PortfolioInterface {
  id: number;
  documentId: string;
  title: string;
  slugName: string;
  categoryPage: string;
  shortDescription: string;
  coverImage: coverImage;
  isActiveCategoryPage: boolean;
  orderInCategoryPage: number;
  ClientName: string;
  location: string;
  tags: string;
  tagLists: string[];
  content: string;
  seo: seo;
  galery: galery[];
}

export interface coverImage {
  image: ImageInterface;
  alt: string;
}

export interface seo {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface galery {
  image: ImageInterface;
  alt: string;
  alternativeText: string;
}

export interface ImageInterface {
  url: string;
  documentId: string;
  name: string;
  alternativeText: string;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  width: number;
  height: number;
  previewUrl: string;
  provider: string;
  provider_metadata: any;
  createdAt: string;
}
