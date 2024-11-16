import { z } from 'zod';

export const credentialsSchema = z.object({
  login: z.string().email(),
  password: z.string().min(8).max(20)
});
