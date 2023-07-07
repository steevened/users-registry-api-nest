import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  names: string;

  @Column({
    type: 'varchar',
  })
  lastNames: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  dniNumber: number;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  cellphone: string;

  @Column({
    type: 'varchar',
  })
  address: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  note?: string;
}
