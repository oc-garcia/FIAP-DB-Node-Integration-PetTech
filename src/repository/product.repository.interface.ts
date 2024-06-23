import { IProduct } from '@/entities/models/product.interface'

export interface IProductRepository {
  create(product: IProduct): Promise<IProduct>
  update(product: IProduct): Promise<IProduct>
  findAll(page: number, limit: number): Promise<IProduct[]>
  findById(id: string): Promise<IProduct | null>
  delete(id: string): Promise<void>
}
