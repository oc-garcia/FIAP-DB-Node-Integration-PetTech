import { IProduct } from '@/entities/models/product.interface'
import { IProductRepository } from '@/repository/product.repository.interface'

export class UpdateProductUSeCase {
  constructor(private productRepository: IProductRepository) {}

  async handler(product: IProduct) {
    return this.productRepository.update(product)
  }
}
