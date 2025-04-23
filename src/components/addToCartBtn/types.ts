export interface AddToCartProps {
  productId: string;
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}