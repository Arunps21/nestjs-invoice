import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceProvider } from '../../service-providers/entity/service-provider.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  role: string;

  @ManyToOne(() => ServiceProvider, (serviceProvider) => serviceProvider.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'service_provider_id' })
  service_provider_id: number;
}
