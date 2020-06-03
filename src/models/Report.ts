import {
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Members_list from './MembersList';
import Failure from './Failure';
import Exibition from './Exibition';

@Entity('reports')
class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  exibition_id: string;

  @OneToOne(() => Exibition)
  @JoinColumn()
  exibition: Exibition;

  @Column()
  failures_id: string;

  @OneToMany(() => Failure, failure => failure.id)
  failures: Failure[];

  @Column()
  members_list_id: string;

  @OneToMany(() => Members_list, members_list => members_list.report)
  members_list: string;

  @Column()
  comments: string;

  @UpdateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  created_at: Date;
}

export default Report;
