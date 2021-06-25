import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produto } from "./produtos.model";

@Injectable()
export class ProdutosService {
    constructor(
        @InjectModel(Produto)
        private produtoModel: typeof Produto
    ) {}

    async getProdutoID(id_produto: number): Promise<Produto> {
        return this.produtoModel.findByPk(id_produto)
    }

    async criaProduto(produto: Produto) {
        this.produtoModel.create(produto)
    }

    async updateProduto(produto: Produto) : Promise<[number,Produto[]]> {
        return this.produtoModel.update(produto, {
            where: {
                id: produto.id
            }
        })
    }

    async deletaProduto(id: number) {
        const produto: Produto = await this.getProdutoID(id)
        produto.destroy()
    }
}