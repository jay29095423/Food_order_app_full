import React, { useContext } from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = props => {

     const cartData = useContext(CartContext);
     const totalAmount = `$${cartData.totalAmount.toFixed(2)}`;
     const hasItem = cartData.item.length > 0;

     const cartItemRemove = id => {

         cartData.removeItem(id);

     };

     const cartItemAdd = item => {

          cartData.addItem({ ...item, amount: 1 });

     };

     const cartItems =
          <ul className={classes['cart-items']}>
               {cartData.item.map(

                    item =>
                         <CartItem
                              key={item.id}
                              name={item.name}
                              amount={item.amount}
                              price={item.price}
                              onRemove={cartItemRemove.bind(null, item.id)}
                              onAdd={cartItemAdd.bind(null, item)}
                         />)}
          </ul>

     return (
          <Modal comfirm={props.switchCart}>

               {cartItems}
               <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
               </div>
               <div className={classes.actions}>

                    <button className={classes['button--alt']} onClick={props.switchCart}>Close</button>
                    {hasItem && <button className={classes.button}>Order</button>}

               </div>

          </Modal>
     )
}

export default Cart