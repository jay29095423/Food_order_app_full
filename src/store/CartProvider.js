import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
     items: [],
     totalAmount: 0
}

const cartReducer = (state, action) => {

     switch (action.type) {
          case 'ADD_CART_ITEM':
               const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

               const existingCartItemIndex =
                    state.items.findIndex(
                         item => item.id === action.item.id
                    );

               const existingCartItem = state.items[existingCartItemIndex];

               let updatedItems;

               if (existingCartItem) {

                    const updatedItem = {             //設定已存在購物車內的項目的數
                         ...existingCartItem,
                         amount: existingCartItem.amount + action.item.amount
                    }

                    updatedItems = [...state.items];
                    updatedItems[existingCartItemIndex] = updatedItem; //把更新過的狀態更新

               } else {

                    updatedItems = state.items.concat(action.item);   //新增項目
               }

               return {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount
               };

          case 'REMOVE_CART_ITEM':

               const existingCartItemIndex_R =
                    state.items.findIndex(
                         item => item.id === action.id
                    );

               const existingItem_R = state.items[existingCartItemIndex_R];

               const updatedTotalAmount_R = state.totalAmount - existingItem_R.price

               let updatedItems_R;

               if (existingItem_R.amount === 1) {

                    updatedItems_R = state.items.filter(item => item.id !== action.id);

               } else {

                    const updatedItem_R = { ...existingItem_R, amount: existingItem_R.amount - 1 };

                    updatedItems_R = [...state.items];

                    updatedItems_R[existingCartItemIndex_R] = updatedItem_R;

               }

               return ({

                    items: updatedItems_R,
                    totalAmount: updatedTotalAmount_R

               })

          default:
               return defaultCartState
     }




}

const CartProvider = props => {

     const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

     const addToCart = (item) => {

          dispatchCartAction(
               {
                    type: "ADD_CART_ITEM",
                    item: item
               }
          )

     };

     const removeFromCart = id => {

          dispatchCartAction(
               {
                    type: "REMOVE_CART_ITEM",
                    id: id
               }
          )

     };

     const myCart = {

          item: cartState.items,
          totalAmount: cartState.totalAmount,
          addItem: addToCart,
          removeItem: removeFromCart

     }

     return (
          <CartContext.Provider value={myCart}>
               {props.children}
          </CartContext.Provider>
     )
}

export default CartProvider