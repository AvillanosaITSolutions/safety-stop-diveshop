import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bookings' })
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid' })
  serviceId!: string;

  @Column({ type: 'varchar', length: 120 })
  customerName!: string;

  @Column({ type: 'varchar', length: 180 })
  customerEmail!: string;

  @Column({ type: 'varchar', length: 60 })
  customerPhone!: string;

  @Column({ type: 'date' })
  preferredDate!: string;

  @Column({ type: 'varchar', length: 40, default: 'pending' })
  status!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;
}
