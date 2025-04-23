'use client';

import Link from 'next/link';
import styles from './cartPage.module.scss';
import { useCart } from '@/composables';
import CartSummery from './_components/cartSummery/cartSummery';
import CartItem from './_components/cartItems/cartItem';

export default function CartPage() {
  const { items } = useCart();

  // empty cart 
  if (items.length === 0) {
    return (
      <section className={styles.container}>
        <article className={styles.emptyCart}>
          <h1 className={styles.emptyCartTitle}>Your cart is empty</h1>
          <p className={styles.emptyCartText}>
            Looks like you haven&apos;t added any items to your cart yet.
          </p>
          <Link href="/products" className={styles.continueShopping}>
            Continue Shopping
          </Link>
        </article>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Shopping Cart</h1>

      {/* cart items */}
      <section className={styles.cartItems} aria-label="Cart Items">
        {items.map(item => <CartItem key={item.id} item={item} />)}
      </section>

      {/* cart summery */}
      <CartSummery />
    </section>
  );
}
