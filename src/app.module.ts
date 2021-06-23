import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojasController } from './lojas/lojas.controller';

@Module({
  imports: [],
  controllers: [AppController, LojasController],
  providers: [AppService],
})
export class AppModule {}
