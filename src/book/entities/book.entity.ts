import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string  
    @Column()
    count:number
    @Column()
    price:number
    @Column()
    author:string  
}