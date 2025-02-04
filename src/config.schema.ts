import { z } from 'zod';

export const configSchema = z.object({
  PORT: z.number(),
  BASE_URL_API: z.string(),
});
