import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('members_list')
class MembersList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  members_list_json: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MembersList;
