import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from './config.schema';
import { formatError } from './common/helpers/responses/error.helper';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // Tipagem dos dados persistentes no .env
      validate: (config) => {
        const parsed = configSchema.safeParse(config);

        if (!parsed.success) {
          // console.log(parsed.error);
          formatError(parsed.error);
        }

        return config;
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
