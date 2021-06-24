import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Loja extends Model<Loja> {
    paranoid: true;
    timestamp: true;
    
    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    info: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    destaque: boolean;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    image: string;

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    nota: number;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    deletedAt: Date;

    // constructor(nome: string, info: string, destaque: boolean, image: string, nota: number) {
    //     this.nome = nome;
    //     this.info = info;
    //     this.destaque = destaque;
    //     this.image = image;
    //     this.nota = nota;
    // }
}