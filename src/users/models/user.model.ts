import { Column, Model, Table } from 'sequelize-typescript';
import { Role } from 'src/enums/role.enum';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column
  username: string;

  @Column
  full_name: string;

  @Column({ defaultValue: Role.User.toString() })
  role: string;

  @Column
  password: string;
    created_at: any;
}
