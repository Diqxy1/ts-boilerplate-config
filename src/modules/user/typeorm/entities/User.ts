import Customer from '@modules/customers/typeorm/entities/Customer';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsEnum, Length } from 'class-validator';

export enum Gender {
  MALE = 'Masculino',
  FEMALE = 'Feminino',
  OTHER = 'Outros',
}

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 80 })
  name: string;

  @Column()
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @Column()
  @Length(10, 20, { message: 'Invalid password' })
  password: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: false,
  })
  @IsEnum(Gender)
  gender: Gender;

  @Column({ default: false })
  isActive: boolean;

  @OneToMany(() => Customer, customer => customer.user, { cascade: ['insert'] })
  customer: Customer[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
