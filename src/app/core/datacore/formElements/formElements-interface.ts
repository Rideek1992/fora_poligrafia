export interface FormElementsInterface {
  name: string;
  email: string;
  phone: string;
  message: string;
  topic: string;
  conversatrionElement: ConversatrionElement[];
}

export interface ConversatrionElement {
  name: string;
  value: string;
  active: boolean;
  orderBy: number;
}
