import { IPerson } from '@/entities/models/person.interface'
import { IUser } from '@/entities/models/user.interface'

export interface IUserRepository {
  findWithPerson(user_id: number): Promise<(IUser & IPerson) | undefined>
  create(user: IUser): Promise<IUser | undefined>
}
