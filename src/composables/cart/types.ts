// interfaces 
export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ICartTotals {
  totalItems: number;
  totalPrice: number;
}

export interface ICartState extends ICartTotals {
  items: ICartItem[];
} 

export interface ICartContextType extends ICartState {
  getCartItemQuaintly: (id: string) => number;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

// enums
export const enum CartActionsEnum {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
}

// types
export type TCartAction =
  | { type: CartActionsEnum.ADD_TO_CART; payload: ICartItem }
  | { type: CartActionsEnum.REMOVE_FROM_CART; payload: string }
  | { type: CartActionsEnum.UPDATE_QUANTITY; payload: { id: string; addedQuantity: number } }
  | { type: CartActionsEnum.CLEAR_CART };
