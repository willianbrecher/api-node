import {PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

export abstract class PersistentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;
 
    @UpdateDateColumn()
    updated_at: Date;

}