import { Metadata } from 'next';

// This function generates metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  try {
    const productId = (await params).productId;

    // Add timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, {
      next: { revalidate: 86400 }, // Revalidate every 24 hours
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        title: 'Product Not Found',
        description: 'The requested product could not be found.',
      };
    }

    const product = await response.json();

    return {
      title: `${product.name} | Your Store Name`,
      description: product.description,
      keywords: [product.name, 'product', 'shop', 'store', 'buy', 'online shopping'],
      openGraph: {
        title: product.name,
        description: product.description,
        images: [
          {
            url: product.image,
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
        type: 'website',
        siteName: 'Your Store Name',
      },
      twitter: {
        card: 'summary_large_image',
        title: product.name,
        description: product.description,
        images: [product.image],
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${productId}`,
      },
      other: {
        'product:price:amount': product.price.toString(),
        'product:price:currency': 'USD',
        'product:availability': 'in stock',
        'product:category': 'Products',
      },
    };
  } catch {
    // Return fallback metadata if API call fails
    return {
      title: 'Product | Your Store Name',
      description: 'View product details on our store.',
    };
  }
}

// This function generates static params for ISR
export async function generateStaticParams() {
  try {
    // Add timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      next: { revalidate: 24 * 60 * 60 }, // Revalidate every 24 hours
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      // Return a minimal set of params if API fails
      return [{ productId: '1' }];
    }

    const products = await response.json();
    return products.map((product: { id: string }) => ({
      productId: product.id,
    }));
  } catch {
    // Return a minimal set of params if API fails
    return [{ productId: '1' }];
  }
}

// Define the layout component without params
export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
