import styles from './productCardSkeleton.module.scss';

export default function ProductCardSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.imageSkeleton}></div>
      <div className={styles.contentSkeleton}>
        <div className={styles.titleSkeleton}></div>
        <div className={styles.priceSkeleton}></div>
        <div className={styles.descriptionSkeleton}></div>
        <div className={styles.descriptionSkeleton}></div>
        <div className={styles.buttonSkeleton}></div>
      </div>
    </div>
  );
}
