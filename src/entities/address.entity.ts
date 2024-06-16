import { IAddress } from './models/address.interface'

export class Address implements IAddress {
  id?: number
  street: string
  city: string
  state: string
  zip_code: string
  person_id?: number

  constructor({ street, city, state, zip_code }: Address) {
    this.street = street
    this.city = city
    this.state = state
    this.zip_code = zip_code
  }
}
