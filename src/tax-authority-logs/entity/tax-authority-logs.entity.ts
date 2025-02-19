import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Invoices } from 'src/invoices/entity/invoices.entity';

@Entity('tax_authority_logs')
export class TaxAuthorityLogs {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Invoices, (invoice) => invoice.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'invoice_id' })
  invoice: number;

  @Column({
    type: 'enum',
    enum: ['Pending', 'Validated', 'Rejected'],
    default: 'Pending',
  })
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  timestamp: Date;

  @Column({ type: 'text', nullable: true })
  comments: string;
}
