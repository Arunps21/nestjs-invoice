import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('invoices')
export class Invoices {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (users) => users.id)
  @JoinColumn({ name: 'supplier_id' })
  supplier: number;

  @ManyToOne(() => Users, (users) => users.id)
  @JoinColumn({ name: 'buyer_id' })
  buyer: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  amount: number;

  @Column({
    type: 'enum',
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  })
  status: string;

  @Column({
    type: 'enum',
    enum: ['Pending', 'Validated', 'Rejected'],
    default: 'Pending',
  })
  taxAuthorityStatus: string;

  @CreateDateColumn({ type: 'timestamp' })
  timestamp: Date;
}
