import { MEASUREMENT_ZOD_ENUM } from '@/enums/measurement.enum';
import { z } from 'zod';

export const ingredientsSchema = z.object({
  productName: z
    .string()
    .max(40, 'O nome do produto deve ter no máximo 40 caracteres'),
  description: z
    .string()
    .max(150, 'A descrição deve ter no máximo 150 caracteres'),
  category: z.string().max(40, 'A categoria deve ter no máximo 40 caracteres'),
  measurement: z.enum(MEASUREMENT_ZOD_ENUM)
});
