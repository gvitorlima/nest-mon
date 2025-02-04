import { ZodError } from 'zod';

export function formatError(error: Error | ZodError) {
  if (error instanceof ZodError) {
    console.log(error.errors)
  }
}
