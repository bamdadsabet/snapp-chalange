
import { Trash, Minus, Plus } from '@phosphor-icons/react/dist/ssr';
import { useCart } from '@/composables';
import { AddToCartProps } from './types';
import styles from './addToCartBtn.module.scss';

export default function AddToCart({ productId, product }: AddToCartProps) {
  const { addToCart, getCartItemQuaintly, removeFromCart, updateQuantity } = useCart();

  const quantity = getCartItemQuaintly(productId);

  const handleQuantityUpdate = (isIncrement: boolean = true) => {
    if (isIncrement) updateQuantity(productId, 1);
    else if (quantity > 1) updateQuantity(productId, -1);
    else removeFromCart(productId);
  };

  return (
    <>
      {quantity === 0 ? (
        <button
          onClick={() =>
            addToCart({
              ...product,
              quantity: 1,
            })
          }
          className={styles.addToCartBtn}
        >
          Add to Cart
        </button>
      ) : (
        // quantity button
        <div className={styles.quantityContainer}>
          {/* remove button */}
          <button onClick={() => handleQuantityUpdate(false)} className={styles.quantityBtn}>
            {quantity === 1 ? <Trash size={18} color="white" /> : <Minus size={18} color="white" />}
          </button>

          {/* quantity */}
          <span className={styles.displayQuantity}>{getCartItemQuaintly(productId)}</span>

          {/* add button */}
          <button onClick={() => handleQuantityUpdate()} className={styles.quantityBtn}>
            <Plus size={18} color="white" />
          </button>
        </div>
      )}
    </>
  );
}
