import { IPerson } from '@/entities/models/person.interface'
import { IPersonRepository } from '@/repository/person.repository.interface'

export class CreatePersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  handler(person: IPerson) {
    return this.personRepository.create(person)
  }
}
