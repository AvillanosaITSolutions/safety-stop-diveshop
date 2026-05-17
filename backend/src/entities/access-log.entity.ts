import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'access_logs' })
export class AccessLog {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 80 })
  resource!: string;

  @Column({ type: 'varchar', length: 80 })
  action!: string;

  @Column({ type: 'varchar', length: 120 })
  actor!: string;

  @Column({ type: 'text', nullable: true })
  metadata?: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;
}
