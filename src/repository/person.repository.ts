import { Person } from '@/entities/person.entity'

export class PersonRepository {
  async findById(id: number): Promise<Person> {
    return {
      id,
      name: 'John Doe',
      birth: '1990-01-01',
      cpf: '123.456.789-00',
      email: 'teste@teste.com',
      user_id: 1,
    }
  }

  async create(person: Person): Promise<Person> {
    return person
  }
}
