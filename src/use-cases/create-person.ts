import { Person } from '@/entities/person.entity'
import { PersonRepository } from '@/repository/person.repository'

export class CreatePersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  handler(person: Person) {
    return this.personRepository.create(person)
  }
}
