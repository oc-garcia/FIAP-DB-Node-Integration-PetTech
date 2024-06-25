import { database } from '@/lib/pg/db'
import { IUserRepository } from '../user.repository.interface'
import { IPerson } from '@/entities/models/person.interface'
import { IUser } from '@/entities/models/user.interface'

export class UserRepository implements IUserRepository {
  async findByUserName(username: string): Promise<IUser | undefined> {
    const result = await database.clientInstance?.query<IUser>(
      `SELECT * FROM "user" WHERE "user".username = $1`,
      [username],
    )

    return result?.rows[0]
  }

  public async create({
    username,
    password,
  }: IUser): Promise<IUser | undefined> {
    const result = await database.clientInstance?.query<IUser>(
      `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password],
    )

    return result?.rows[0]
  }

  public async findWithPerson(
    user_id: number,
  ): Promise<(IUser & IPerson) | undefined> {
    const result = await database.clientInstance?.query(
      `SELECT * FROM "user"
       LEFT JOIN "person" ON "user".id = "person".user_id
       WHERE "user".id = $1
      `,
      [user_id],
    )

    return result?.rows[0]
  }
}
