export class Loja {
    id: number;
    nome: string;
    info: string;
    destaque: boolean;
    image: string;
    nota: number;

    constructor(nome: string, info: string, destaque: boolean, image: string, nota: number) {
        this.nome = nome;
        this.info = info;
        this.destaque = destaque;
        this.image = image;
        this.nota = nota;
    }
}