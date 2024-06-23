import { IProduct } from '@/entities/models/product.interface'
import { IProductRepository } from '@/repository/product.repository.interface'

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(product: IProduct): Promise<IProduct> {
    return this.productRepository.create(product)
  }
}
