'use client';

import Image from 'next/image';
import AddToCart from '@/components/addToCartBtn/addToCartBtn';
import ProductSkeleton from './skeleton/ProductDeatailSkeleton';
import styles from './ProductDetail.module.scss';
import { ProductDetailProps } from './types';
import { useFetch } from '@/composables';

export default function ProductClient({ productId }: ProductDetailProps) {
  const { result: product, isLoading, error } = useFetch<IProduct>(`/api/products/${productId}`);

  // loading card skeleton
  if (isLoading) {
    return <ProductSkeleton />;
  }

  // error handling
  if (error || !product) {
    return (
      <main className={styles.notFoundContainer}>
        <div className={styles.notFoundWrapper}>
          <h1 className={styles.notFoundTitle}>Product not found</h1>
        </div>
      </main>
    );
  }

  // product details
  return (
    <section className={styles.wrapper}>
      {/* Product Image */}
      <figure className={styles.imageContainer}>
        <Image src={product.image} alt={product.name} fill className={styles.image} priority />
        <figcaption className="sr-only">{product.name}</figcaption>
      </figure>

      {/* Product Details */}
      <section className={styles.detailsContainer} aria-label="Product Details">
        <div className={styles.productInfo}>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price} aria-label={`Price: ${product.price.toFixed(2)} dollars`}>
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Add to Cart Button */}
        <AddToCart productId={productId} product={product} />
      </section>
    </section>
  );
}
