import { PersonRepository } from '@/repository/person.repository'
import { CreatePersonUseCase } from '../create-person'

export function makeCreatePersonUseCase() {
  const personRepository = new PersonRepository()
  const createPersonUseCase = new CreatePersonUseCase(personRepository)
  return createPersonUseCase
}
