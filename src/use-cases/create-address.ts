import { IAddress } from '@/entities/models/address.interface'
import { IAddressRepository } from '@/repository/address.repository.interface'

export class CreateAddress {
  constructor(private addressRepository: IAddressRepository) {}

  async handler(address: IAddress): Promise<IAddress | undefined> {
    return this.addressRepository.create(address)
  }
}
