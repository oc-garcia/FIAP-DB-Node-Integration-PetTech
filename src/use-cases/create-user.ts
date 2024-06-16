import { IUser } from '@/entities/models/user.interface'
import { IUserRepository } from '@/repository/user.repository.interface'

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  handler(user: IUser): Promise<IUser | undefined> {
    return this.userRepository.create(user)
  }
}
