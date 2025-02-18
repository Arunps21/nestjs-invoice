import { BadRequestException } from '@nestjs/common';
import { Users } from 'src/users/entity/users.entity';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from 'typeorm';

@Entity('service-providers')
export class ServiceProvider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'enum', enum: ['Supplier', 'Buyer'], nullable: false })
  type: 'Supplier' | 'Buyer';

  @Column({ type: 'varchar', length: 255, nullable: false })
  api_url: string;

  @OneToMany(() => Users, (Users) => Users.service_provider_id)
  users: Users[];

  @BeforeInsert()
  validateType() {
    if (!['Supplier', 'Buyer'].includes(this.type)) {
      throw new BadRequestException(`Type must be either Supplier or Buyer`);
    }
  }
}
