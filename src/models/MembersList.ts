import {
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';

import Report from './Report';

@Entity('members_list')
class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  diretor_tv_1: string;

  @Column()
  diretor_tv_2: string;

  @Column()
  coord_tj: string;

  @Column()
  coord_externa: string;

  @Column()
  editor_chefe: string;

  @Column()
  sonoplasta_1: string;

  @Column()
  sonoplasta_2: string;

  @Column()
  lider_tecnologia: string;

  @Column()
  editor_imagem_1: string;

  @Column()
  editor_imagem_2: string;

  @Column()
  tecnico_sistemas_1: string;

  @Column()
  tecnico_sistemas_2: string;

  @Column()
  tecnico_sistemas_3: string;

  @Column()
  produtor_tecnologia: string;

  @ManyToOne(() => Report, report => report.members_list)
  report: string;

  @UpdateDateColumn()
  updated_at: Date;

  @UpdateDateColumn()
  created_at: Date;
}

export default Member;
