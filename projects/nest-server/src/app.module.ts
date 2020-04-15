import { AppServerModule } from '@client/main.server';
import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  controllers: [
    AppController
  ],
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/jp-mean/browser')
    })
  ]
})
export class AppModule {}
