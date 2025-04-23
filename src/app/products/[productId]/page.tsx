import { Metadata } from 'next';
import { ProductService } from '@/services/productService';
import ProductClient from './_components/productDetail/ProductDetail';

// Generate metadata for ISR
export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const productId = (await params).productId;
  const product = await ProductService.getProductById(productId);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

// Set revalidation time for ISR (e.g., 60 seconds)
export const revalidate = 60;

// Generate static params for all products
export async function generateStaticParams() {
  const products = await ProductService.getAllProducts();
  return products.map((product: IProduct) => ({
    productId: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  return <ProductClient productId={productId} />;
}
