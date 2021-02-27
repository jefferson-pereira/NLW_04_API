import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("tbusuarios")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @CreateDateColumn()
    dt_criacao: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { User };