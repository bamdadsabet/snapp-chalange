import Link from 'next/link';
import styles from './navbar.module.scss';
import CartBtn from './cartBtn';
const Navbar = () => {

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbarContainer} aria-label="Main navigation">
        {/* logo */}
        <Link href="/products" className={styles.logo}>
          <h1>Snapp Shop!</h1>
        </Link>
        {/* cart */}
        <CartBtn />
      </nav>
    </header>
  );
};

export default Navbar;
