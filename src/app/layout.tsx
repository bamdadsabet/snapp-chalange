import { Inter } from 'next/font/google';
import './globals.scss';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { CartProvider } from '@/composables';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
