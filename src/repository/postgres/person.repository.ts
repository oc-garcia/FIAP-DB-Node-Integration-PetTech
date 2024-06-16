import { Person } from '@/entities/person.entity'
import { database } from '@/lib/pg/db'
import { IPersonRepository } from '../person.repository.interface'

export class PersonRepository implements IPersonRepository {
  public async create({
    cpf,
    birth,
    email,
    name,
    user_id,
  }: Person): Promise<Person | undefined> {
    const result = await database.clientInstance?.query<Person>(
      `INSERT INTO "person" (cpf, birth, email, name, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [cpf, birth, email, name, user_id],
    )

    return result?.rows[0]
  }
}
