
export interface ICartItemProps {
  item: Omit<IProduct, 'description'> & { quantity: number };
}