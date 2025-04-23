import { useCart } from "@/composables";
import styles from './cartItem.module.scss';
import AddToCartBtn from "@/components/addToCartBtn/addToCartBtn";
import Image from "next/image";
import { ICartItemProps } from "./types";


export default function CartItem({ item }: ICartItemProps) {
  const { removeFromCart } = useCart();
  return (
    <article key={item.id} className={styles.cartItem}>

      {/* item image */}
      <figure className={styles.itemImage}>
        <Image
          src={item.image}
          alt={`${item.name} product image`}
          width={100}
          height={100}
          className={styles.image}
        />
      </figure>

      {/* item details */}
      <div className={styles.itemDetails}>
        <h2 className={styles.itemName}>{item.name}</h2>
        <p
          className={styles.itemPrice}
          aria-label={`Price: ${item.price.toFixed(2)} dollars`}
        >
          ${item.price.toFixed(2)}
        </p>

        {/* add to cart button */}
        <AddToCartBtn productId={item.id} product={item} />
      </div>

      {/* item total */}
      <div className={styles.itemTotal}>
      <p
        className={styles.totalPrice}
        aria-label={`Total for ${item.name}: ${(item.price * item.quantity).toFixed(2)} dollars`}
      >
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      {/* remove button */}
      <button
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Remove
      </button>
    </div>
  </article>
  )
}
