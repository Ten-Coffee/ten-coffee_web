export interface AddressInterface {
  id?: number;
  zipCode: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  additionalInformation?: string | undefined;
  state: string;
}
