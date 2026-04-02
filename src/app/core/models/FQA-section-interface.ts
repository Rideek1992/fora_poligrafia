export interface FQASection {
  id: number;
  documentId: string;
  pageName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  FQAElement: FQAElement[];
}

export interface FQAElement {
  id: number;
  question: string;
  answer: string;
  orderBy: number;
  isActive: boolean;
  linkPageGo: string;
  icon: string;
  createAt: string;
}
