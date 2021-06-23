import { Get, Param, Controller, Body, Post, Put, Delete } from "@nestjs/common";

@Controller('lojas')
export class LojasController {
    
    @Get()
    readLojas(): string {
        return "Rota Get pra todas as lojas"
    }

    @Get(':id')
    buscaPorId(@Param() params): string {
        return `Rota get pra uma loja com o ID ${params.id}`
    }

    @Post()
    criarLoja(@Body() loja) : string {
        console.log(loja)
        return 'Loja criada'
    }

    @Put()
    updateLoja(@Body() loja): string {
        return 'Rota update criada'
    }

    @Delete(':id')
    deletaLoja(@Param() params) : string {
        return 'Rota delete criada'
    }

}