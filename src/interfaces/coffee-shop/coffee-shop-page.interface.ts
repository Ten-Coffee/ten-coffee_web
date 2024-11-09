import { CoffeeShopInterface } from '@/interfaces/coffee-shop/coffee-shop.interface';

export interface CoffeeShopPage
  extends Pick<
    CoffeeShopInterface,
    'id' | 'name' | 'cnpj' | 'email' | 'status'
  > {
  representativeName: string;
}
