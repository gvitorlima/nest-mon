import { Inject, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configSchema, Config } from './config.schema';
import { ErrorHelper } from './common/helpers/responses/error.helper';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config): Config => {
        const parsed = configSchema.safeParse(config);

        if (!parsed.success) {
          ErrorHelper.throwValidationError(parsed.error);
        }

        return parsed.data;
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
