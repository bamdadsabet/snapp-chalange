import styles from './ProductDetailSkeleton.module.scss';

export default function ProductSkeleton() {
  return (
    <section className={styles.wrapper}>
      {/* Product Image Skeleton */}
      <div className={styles.imageContainer}>
        <div className={`${styles.image} ${styles.skeleton}`} />
      </div>

      {/* Product Details Skeleton */}
      <div className={styles.detailsContainer}>
        <div className={styles.productInfo}>
          <div className={`${styles.title} ${styles.skeleton}`} />
          <div className={`${styles.description} ${styles.skeleton}`} />
          <div className={`${styles.price} ${styles.skeleton}`} />
        </div>

        {/* Add to Cart Button Skeleton */}
        <div className={`${styles.addToCartButton} ${styles.skeleton}`} />
      </div>
    </section>
  );
}
