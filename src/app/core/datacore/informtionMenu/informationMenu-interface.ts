export interface InformationMenu {
  companyName: string;
  phone: string;
  email: string;
  nip: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  active: boolean;
}
