import { NextResponse } from 'next/server';
import { ProductService } from '@/services';

export async function GET() {
  try {
    const products = await ProductService.getAllProducts();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json(
      { message: 'Error fetching products' },
      { status: 500 }
    );
  }
}