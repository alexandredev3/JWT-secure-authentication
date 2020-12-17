import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
class User {

  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar", {
    unique: true
  })
  email: string;

  @Column("varchar")
  @Exclude()
  password: string;

  @Column("varchar")
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User