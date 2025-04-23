import styles from './cartSummery.module.scss';
import { useCart } from '@/composables';


export default function CartSummery() {
  const { totalPrice,  clearCart } = useCart();

  const handleCheckout = () => {
    alert('Checkout successful');
    clearCart();
  };

  return (
    <aside className={styles.cartSummary} aria-label="Cart Summary">
      <div className={styles.summaryRow}>
        <span>Total:</span>
        <span
      className={styles.totalAmount}
      aria-label={`Total amount: ${totalPrice.toFixed(2)} dollars`}
    >
      ${totalPrice.toFixed(2)}
    </span>
      </div>
      <button onClick={handleCheckout} className={styles.checkoutButton}>
        Proceed to Checkout
      </button>
    </aside>
  );
}
