import { IAddress } from '@/entities/models/address.interface'
import { IPerson } from '@/entities/models/person.interface'
import { IAddressRepository } from '@/repository/address.repository.interface'

export class findAddressByPersonUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async handler(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(IAddress & IPerson)[]> {
    return this.addressRepository.findAddressByPersonId(personId, page, limit)
  }
}
