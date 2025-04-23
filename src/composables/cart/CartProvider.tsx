'use client';

import { createContext, useMemo, useReducer } from 'react';
import { CartActionsEnum, ICartContextType, ICartItem, ICartState, TCartAction } from '.';

// reducer
function cartReducer(state: ICartState, action: TCartAction): ICartState {
  switch (action.type) {
    // add to cart
    case CartActionsEnum.ADD_TO_CART: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    // remove from cart
    case CartActionsEnum.REMOVE_FROM_CART: {
      const updatedItems = state.items.filter(item => item.id !== action.payload);

      return { ...state, items: updatedItems };
    }

    // update quantity
    case CartActionsEnum.UPDATE_QUANTITY: {
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.addedQuantity,
          };
        }
        return item;
      });

      return { ...state, items: updatedItems };
    }

    // clear cart
    case CartActionsEnum.CLEAR_CART: {
      return { ...state, items: [] };
    }

    default: {
      return state;
    }
  }
}

// context
export const CartContext = createContext<ICartContextType | undefined>(undefined);

// provider
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });

  const contextValue = useMemo(
    () => ({
      // states
      items: state.items,
      totalItems: state.items.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      // getters
      getCartItemQuaintly: (id: string) => {
        return state.items.find(item => item.id === id)?.quantity ?? 0;
      },

      // actions
      addToCart: (item: ICartItem) => {
        dispatch({ type: CartActionsEnum.ADD_TO_CART, payload: item });
      },
      removeFromCart: (itemId: string) => {
        dispatch({ type: CartActionsEnum.REMOVE_FROM_CART, payload: itemId });
      },
      updateQuantity: (productId: string, quantity: number) => {
        dispatch({
          type: CartActionsEnum.UPDATE_QUANTITY,
          payload: { id: productId, addedQuantity: quantity },
        });
      },
      clearCart: () => {
        dispatch({ type: CartActionsEnum.CLEAR_CART });
      },
    }),
    [state.items]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
