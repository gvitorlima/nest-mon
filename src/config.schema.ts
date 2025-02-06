import { z } from 'zod';

export const configSchema = z.object({
  PORT: z.string().regex(/(\d+){4}/, {
    message: 'Field PORT in .env must contain only four numbers',
  }),
  BASE_URL_API: z.string(),
});

export type Config = z.infer<typeof configSchema>;
