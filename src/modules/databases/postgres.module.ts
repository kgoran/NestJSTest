//src/databases/postgres.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const entities = getMetadataArgsStorage()
          .tables.map((tbl) => tbl.target as Function)
          .filter((entity) =>
            entity.toString().toLowerCase().includes('entity'),
          );

        return {
          type: 'postgres',
          host: configService.get('POSTGRES_HOST') as string,
          port: configService.get('POSTGRES_PORT') as number,
          username: configService.get('POSTGRES_USER') as string,
          password: configService.get('POSTGRES_PASSWORD') as string,
          database: configService.get('POSTGRES_DB') as string,
          entities,
          synchronize: true, // Be cautious about using synchronize in production
          logging: true,
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class PostgresModule {}
