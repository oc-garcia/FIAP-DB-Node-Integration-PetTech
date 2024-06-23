import { ProductRepository } from '@/repository/typeorm/product.repository'
import { UpdateProductUSeCase } from '../updated-product'

export function makeUpdateProductUseCase() {
  const productRepository = new ProductRepository()
  const updateProductUseCase = new UpdateProductUSeCase(productRepository)

  return updateProductUseCase
}
