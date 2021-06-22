import {Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";
import { User } from './User';

@Entity()
class Favorite {
    @PrimaryGeneratedColumn()   
    id: number;
    
    @Column()
    user_id: number;

    @Column()
    book_id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Favorite }
