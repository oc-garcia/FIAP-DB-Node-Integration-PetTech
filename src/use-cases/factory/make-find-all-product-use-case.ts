import { ProductRepository } from '@/repository/typeorm/product.repository'
import { FindAllProductUseCase } from '../find-all-product'

export function makeFindAllProductUseCase() {
  const productRepository = new ProductRepository()
  const findAllProductUseCase = new FindAllProductUseCase(productRepository)

  return findAllProductUseCase
}
