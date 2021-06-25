import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Produto extends Model<Produto> {
    paranoid: true;
    timestamp: true;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id_loja: number;

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    nome_prod: string;

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    info_prod: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    destaque_prod: boolean;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    image_prod: string;

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    preco_prod: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    categoria_prod: string;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    deletedAt: Date;

}