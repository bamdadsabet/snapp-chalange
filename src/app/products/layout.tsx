import { Metadata } from "next";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
export const metadata: Metadata = {
  title: 'Products | Snapp Shop',
  description:
    'Discover our premium selection of products.find everything you need and want.',
  keywords: 'Snapp Shop, , mobile, phone, laptop, tablet, computer, accessories, gadgets, electronics, technology, watches',
  openGraph: {
    title: 'Products | Snapp Shop',
    description:
      'Discover our premium selection of products.find everything you need and want.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Snapp Shop',
    // image can be here 
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Snapp Shop',
    description:
      'Discover our premium selection of products.find everything you need and want.',
    // image can be here 

  },
};
