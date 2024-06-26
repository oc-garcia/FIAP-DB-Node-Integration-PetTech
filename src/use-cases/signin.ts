import { IUserRepository } from '@/repository/user.repository.interface'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

export class SignInUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(username: string) {
    const user = await this.userRepository.findByUserName(username)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    return user
  }
}
