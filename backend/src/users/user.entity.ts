import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;  

  @Column()
  password: string; 

  @Column({ unique: true })  // IMPORTANT : unique si tu veux que l'email soit unique
  email: string;

  @Column()
  role: 'admin' | 'eleve' | 'professeur';
}
