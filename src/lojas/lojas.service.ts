import { Injectable } from '@nestjs/common';
import { Loja } from './lojas.model'

@Injectable()
export class LojasService {
    lojas: Loja[] = [
        new Loja("McDonald's", "Líder no segmento fast-food", true, "https://braziljournal.s3.amazonaws.com/covers/fe5465ca-0285-fabd-82aa-d9cbb9ceb18d.jpg?v=1541712233", 5.0),
        new Loja("Burger King", "Líder no segmento fast-food", true, "https://braziljournal.s3.amazonaws.com/covers/fe5465ca-0285-fabd-82aa-d9cbb9ceb18d.jpg?v=1541712233", 5.0),
        new Loja("Madero", "Líder no segmento fast-food", true, "https://braziljournal.s3.amazonaws.com/covers/fe5465ca-0285-fabd-82aa-d9cbb9ceb18d.jpg?v=1541712233", 5.0)
    ];

    readLojas(): Loja[] {
        return this.lojas;
    }

    buscaPorId(id:number): Loja {
        return this.lojas[`${id}`]
    }

    criarLoja(loja : Loja) {
        // console.log(loja)
        this.lojas.push(loja)
    }

    updateLoja(loja: Loja): Loja {
        return loja;
    }

    apagar(id: number){
        this.lojas.pop()
    }
}