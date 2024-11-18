import { BASE_URL } from '@/constants/base-url.constant';
import { AddressInterface } from '@/interfaces/address/address.interface';

const resourceUrl = BASE_URL + '/addresses';

const findById = async (id: string): Promise<AddressInterface> => {
  const parseId = parseInt(id);
  const response = await fetch(`${resourceUrl}/${parseId}`);
  return await response.json();
};

const editById = async (
  id: string,
  data: AddressInterface
): Promise<AddressInterface> => {
  const response = await fetch(`${resourceUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
};

export const AddressService = {
  findById,
  editById
};
