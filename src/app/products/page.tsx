'use client';

import ProductCard from './_components/productCard/productCard';
import ProductCardSkeleton from './_components/productCard/skeleton/productCardSkeleton';
import styles from './products.module.scss';
import { useFetch } from '@/composables';

export default function ProductsPage() {
  const { result: products, isLoading, error } = useFetch<IProduct[]>('/api/products');


  // loading card skeleton
  if (isLoading) {
    return (
      <section className={`container ${styles.main}`}>
        <h1 className={styles.title}>Products List</h1>
        <div className={styles.grid}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>
      </section>
    );
  }

  // error handling
  if (error) {
    return (
      <section className={`container ${styles.main}`}>
        <h1 className={styles.title}>Error</h1>
        <p className={styles.error}>{error}</p>
      </section>
    );
  }

  // products list
  return (
    <section className={`container ${styles.main}`}>
      <h1 className={styles.title}>Products List</h1>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
