import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ErrorResponseDto } from 'src/common/dto/responses/error-response.dto';
import { ZodError } from 'zod';

@Injectable()
export class ErrorHelper {
  private static readonly logger = new Logger();

  static throwValidationError(error: ZodError): never {
    throw new ErrorResponseDto(400, 'Validation Error', error.format());
  }

  static throwCustomError(
    code: HttpStatus,
    message: string,
    details?: any,
  ): never {
    this.logger.error({ message: message, context: details });

    throw new ErrorResponseDto(Number(code.toString()), message, details);
  }
}
