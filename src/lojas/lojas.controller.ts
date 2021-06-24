import { Get, Param, Controller, Body, Post, Put, Delete } from "@nestjs/common";
import { Loja } from "./lojas.model"
import { LojasService } from "./lojas.service";

@Controller('lojas')
export class LojasController {
    constructor(private lojasService: LojasService) {

    }
    
    @Get()
    async readLojas(): Promise<Loja[]> {
        return this.lojasService.readLojas();
    }

    @Get(':id')
    async buscaPorId(@Param() params): Promise<Loja> {
        return this.lojasService.buscaPorId(params.id);
    }

    @Post()
    async criarLoja(@Body() loja : Loja) {
        // console.log(loja)
        this.lojasService.criarLoja
    }

    @Put()
    async updateLoja(@Body() loja: Loja): Promise<[number, Loja[]]> {
        return this.lojasService.updateLoja(loja);
    }

    @Delete(':id')
    async deletaLoja(@Param() params) {
        this.lojasService.apagar(params.id)
    }

}