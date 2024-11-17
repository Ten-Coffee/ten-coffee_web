import { z } from 'zod';

export const tableSchema = z.object({
  tablesNumber: z
    .string()
    .transform((val) => Number(val))
    .pipe(
      z
        .number()
        .int('A quantidade de mesas deve ser um número inteiro')
        .positive('A quantidade de mesas deve ser positiva')
    ),
  counter: z
    .string()
    .regex(/^\d{2}:\d{2}$/, 'O contador deve estar no formato mm:ss')
    .transform((val) => {
      const [minutes, seconds] = val.split(':').map((num) => parseInt(num, 10));
      const totalSeconds = minutes * 60 + seconds;

      const normalizedMinutes = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, '0');
      const normalizedSeconds = (totalSeconds % 60).toString().padStart(2, '0');

      return `${normalizedMinutes}:${normalizedSeconds}`;
    })
    .refine(
      (val) => {
        const [minutes, seconds] = val.split(':').map(Number);
        return minutes * 60 + seconds >= 60;
      },
      {
        message: 'O contador deve ser no mínimo 01:00'
      }
    )
});
