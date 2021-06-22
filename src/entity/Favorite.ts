import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column} from "typeorm";

@Entity()
class Favorite {
    @PrimaryGeneratedColumn()   
    id: number;
    
    @Column()
    user_id: string;

    @Column()
    book_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Favorite }
