import { Get, Param, Controller, Post, Body, Put, Delete } from "@nestjs/common";
import { Produto } from "./produtos.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutosService){

    }

    @Get(':id')
    async getProdutoId(@Param() params): Promise<Produto> {
        return this.produtosService.getProdutoID(params.id)
    }

    @Post()
    async criaProduto(@Body() produto) {
        this.produtosService.criaProduto(produto)
    }

    @Put()
    async updateProduto(@Body() produto): Promise<[number, Produto[]]> {
        return this.produtosService.updateProduto(produto)
    }

    @Delete(':id')
    deletaProduto(@Param() params): string {
        return `Deletou o produto ${params.id}`;
    }


}