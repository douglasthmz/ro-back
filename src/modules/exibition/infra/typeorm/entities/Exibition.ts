import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import Report from '../../../../report/infra/typeorm/entities/Report';
import Product from '../../../../product/infra/typeorm/entities/Product';
import Admin from '../../../../admin/infra/typeorm/entities/Admin';

@Entity('exibitions')
class Exibition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  admin_id: string;

  @ManyToOne(type => Admin, exibitions => Exibition, {
    nullable: true,
  })
  @JoinColumn({ name: 'admin_id' })
  admin: Promise<Admin>;

  @Column({ nullable: true })
  product_id: string;

  @ManyToOne(type => Product, exibitions => Exibition, { eager: true })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  // @OneToOne(type => Report, exibition => Exibition, {
  //   eager: true,
  //   nullable: true,
  // })
  // report: Report;

  @Column()
  exibition_date: Date;

  @Column({ nullable: true })
  ready_time: string;

  @Column({ default: false })
  report_sent: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Exibition;
