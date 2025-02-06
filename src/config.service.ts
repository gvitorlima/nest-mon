import { ConfigService } from '@nestjs/config';
import { Config } from './config.schema';
import { Injectable } from '@nestjs/common';

/**
 * Classe que sobrepõe o método @method get padrão do ConfigService
 * adicionando tipagem com base no schema zod para validação do .env
 *
 * @extends ConfigService
 */
export class TypedConfigService extends ConfigService {
  private static instance: TypedConfigService;

  static getInstance(): TypedConfigService {
    if (!this.instance) {
      return new this();
    }

    return this.instance;
  }

  get<T extends keyof Config>(configPath: T): Config[T] {
    return super.get<Config[T]>(configPath)!;
  }
}

export const typedConfigInstance: TypedConfigService = TypedConfigService.getInstance();
