import { User } from '@/entities/user.entity'
import { database } from '@/lib/pg/db'

export class UserRepository {
  public async create({ username, password }: User): Promise<User | undefined> {
    const result = await database.clientInstance?.query<User>(
      `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password],
    )

    return result?.rows[0]
  }

  public async findWithPerson(user_id: number) {
    const result = await database.clientInstance?.query<User>(
      `SELECT * FROM "user"
       LEFT JOIN "person" ON "user".id = "person".user_id
       WHERE "user".id = $1
      `,
      [user_id],
    )

    return result?.rows[0]
  }
}
