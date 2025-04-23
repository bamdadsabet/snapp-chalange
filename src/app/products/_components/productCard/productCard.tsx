import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { ProductCardProps } from './types';

const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src={image} alt={name} fill className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            <span className={styles.price}>${price.toFixed(2)}</span>
            <button className={styles.button}>View Details</button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
