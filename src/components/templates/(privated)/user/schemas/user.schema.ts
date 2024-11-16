import { PERMISSION_ZOD_ENUM } from '@/enums/user-permission.enum';
import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  permission: z.enum(PERMISSION_ZOD_ENUM),
  coffeeShop: z.object({
    id: z.number(),
    value: z.string()
  })
});
