export interface CreateCoffeeShopInterface {
  name: string;
  nameFantasy: string;
  cnpj: string;
  email: string;
  phoneNumber: string;
  contractStart: string;
  contractEnd: string;
  user: {
    name: string;
    login: string;
    userPermissionEnum: string;
    phone: string;
    cpf: string;
  };
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
}
