import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import Exibition from '../../../../exibition/infra/typeorm/entities/Exibition';

@Entity('reports')
class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  exibition_id: string;

  @OneToOne(type => Exibition, exibition => Exibition, { eager: true })
  @JoinColumn({ name: 'exibition_id' })
  exibition: Exibition;

  @Column({ nullable: true })
  memberlist_id: string;

  @Column({ default: false })
  report_finished: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Report;
