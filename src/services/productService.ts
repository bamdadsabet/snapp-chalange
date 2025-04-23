import { products } from '@/assets/mockData/products';

export class ProductService {
  static async getAllProducts(): Promise<IProduct[]> {
    return products;
  }

  static async getProductById(id: string): Promise<IProduct | null> {
    const product = products.find(p => p.id === id);
    return product || null;
  }
}
