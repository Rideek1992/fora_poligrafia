export interface PoliticPrivateInterface {
  id: number;
  documentId: string;
  title: string;
  version: string;
  effectiveForm: string;
  content: string;
  isActive: boolean;
  changeDescription: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PoliticPrivateResponseInterface {
  data: PoliticPrivateInterface[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
