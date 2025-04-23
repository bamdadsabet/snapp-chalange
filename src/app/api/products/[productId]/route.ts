import { NextResponse } from 'next/server';
import { ProductService } from '@/services';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const productId = (await params).productId;
    
    if (!productId || isNaN(Number(productId))) {
      return NextResponse.json(
        { message: 'Invalid product ID' },
        { status: 400 }
      );
    }

    const product = await ProductService.getProductById(productId);

    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      { message: 'Error fetching product' },
      { status: 500 }
    );
  }
}