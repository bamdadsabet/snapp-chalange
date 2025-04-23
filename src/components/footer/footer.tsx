'use client';
import Link from 'next/link';
import styles from './footer.module.scss';
import { links, contactLinks } from './constant';

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContainer}>
        <nav className={styles.footerLinkList} aria-label="Footer navigation">
          {/* Company Info */}
          <section className={styles.section} aria-labelledby="company-title">
            <h2 id="company-title" className={styles.footerLinkTitle}>
              Snapp Shop!
            </h2>
            <p className={styles.footerLinkDescription}>Snap shop interview challenge</p>
          </section>

          {/* Quick Links */}
          <section className={styles.footerLinkCenter} aria-labelledby="quick-links-title">
            <h2 id="quick-links-title" className={styles.footerLinkTitle}>
              Quick Links
            </h2>
            <nav aria-label="Quick links">
              <ul className={styles.links}>
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Social Links */}
          <section aria-labelledby="connect-title">
            <h2 id="connect-title" className={styles.footerLinkTitle}>
              Connect Info
            </h2>
            <nav className={styles.socialLinks} aria-label="Social media links">
              {contactLinks.map(link => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  key={link.href}
                  aria-label="Visit our social media page"
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </section>
        </nav>

        {/* Copyright */}
        <div className={styles.footerCopyright}>
          <p>&copy;  Snapp Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
