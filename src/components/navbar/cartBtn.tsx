'use client';
import Link from "next/link";
import { useCart } from "@/composables";
import styles from './navbar.module.scss';
import { Basket } from '@phosphor-icons/react/dist/ssr';

export default function CartBtn() {
  const { totalItems } = useCart();

  return (
    <div className={styles.cart}>
    <Link href="/cart" aria-label={`Shopping cart with ${totalItems} items`}>
      <Basket size={24} aria-hidden="true" />
      {totalItems > 0 && (
        <span className={styles.cartBadge} aria-label={`${totalItems} items in cart`}>
          {totalItems}
        </span>
      )}
    </Link>
  </div>
  )
}

