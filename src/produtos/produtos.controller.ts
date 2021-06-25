import { Get, Param, Controller, Post, Body, Put, Delete } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    getProdutos() : string {
        return "Rota GET todos os produtos"
    }

    @Get(':id')
    getProdutoId(@Param() params): string {
        return `Rota GET produto por id ${params.id}`
    }

    @Post()
    criaProduto(@Body() produto): string {
        console.log(produto)
        return "Rota POST produtos"
    }

    @Put()
    updateProduto(@Body() produto): string {
        return produto;
    }

    @Delete(':id')
    deletaProduto(@Param() params): string {
        return `Deletou o produto ${params.id}`;
    }


}