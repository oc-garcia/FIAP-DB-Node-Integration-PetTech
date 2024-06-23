import { IProductRepository } from '@/repository/product.repository.interface'

export class FindAllProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(page: number, limit: number) {
    return this.productRepository.findAll(page, limit)
  }
}
