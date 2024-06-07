import { Person } from '@/entities/person.entity'
import { PersonRepository } from '@/repository/person.repository'

export class CreatePersonUseCase {
  constructor(private personRepository: PersonRepository) {}

  create(person: Person): Promise<Person> {
    return this.personRepository.create(person)
  }
}
