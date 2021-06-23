import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojasController } from './lojas/lojas.controller';
import { LojasService } from './lojas/lojas.service';

@Module({
  imports: [],
  controllers: [AppController, LojasController],
  providers: [AppService, LojasService],
})
export class AppModule {}
