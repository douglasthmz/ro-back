import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import Exibition from '../../../../exibition/infra/typeorm/entities/Exibition';
import Role from '../../../../roles/infra/typeorm/entities/Role';

@Entity('admins')
class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  role_id: string;

  // @OneToMany(type => Exibition, product => Admin)
  // exibitions: Promise<Exibition[]>;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @CreateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  created_at: Date;
}

export default Admin;
