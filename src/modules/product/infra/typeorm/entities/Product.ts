import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Exibition from '../../../../exibition/infra/typeorm/entities/Exibition';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  site: string;

  @Column()
  avatar_link: string;

  @Column()
  studio: string;

  @Column()
  alias: string;

  @Column()
  control: string;

  // @OneToMany(type => Exibition, product => Product, { nullable: true })
  // exibitions: Promise<Exibition[]>;

  @Column('int', { array: true })
  exibition_days: number[];

  @Column()
  initial_time: string;

  @Column()
  end_time: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
