import { IPerson } from './models/person.interface'

export class Person implements IPerson {
  id?: number
  cpf: string
  name: string
  birth: string | Date
  email: string
  user_id?: number

  constructor(cpf: string, name: string, birth: string, email: string) {
    this.cpf = cpf
    this.name = name
    this.birth = birth
    this.email = email
  }
}
