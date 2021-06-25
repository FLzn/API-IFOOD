import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojasController } from './lojas/lojas.controller';
import { Loja } from './lojas/lojas.model';
import { LojasService } from './lojas/lojas.service';
import { ProdutosController } from './produtos/produtos.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'ifood-api',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Loja])
  ],
  controllers: [AppController, LojasController, ProdutosController],
  providers: [AppService, LojasService],
})
export class AppModule {}
