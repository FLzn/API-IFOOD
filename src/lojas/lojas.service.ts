import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Loja } from './lojas.model'
// import moment from 'moment'

@Injectable()
export class LojasService {

    constructor(
        @InjectModel(Loja)
        private lojaModel: typeof Loja
    ) {}

    async readLojas(): Promise<Loja[]> {
        return this.lojaModel.findAll();
    }

    async buscaPorId(id:number): Promise<Loja> {
        return this.lojaModel.findByPk(id);
    }

    async criarLoja(loja : Loja) {
        this.lojaModel.create(loja)
    }

    async updateLoja(loja: Loja): Promise<[number, Loja[]]> {
        return this.lojaModel.update(loja, {
            where: {
                id: loja.id
            }
        })
    }

    async deletaLoja(id: number){
        const loja : Loja = await this.buscaPorId(id)
        loja.destroy()
    }
}