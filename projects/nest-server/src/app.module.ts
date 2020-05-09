import { AppServerModule } from '@client/main.server';
import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppController } from './app.controller';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [
    AppController
  ],
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService): MongooseModuleOptions => ({
        uri: config.get('MONGO_URI')
      })
    }),
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/mean/browser')
    })
  ]
})
export class AppModule {}
