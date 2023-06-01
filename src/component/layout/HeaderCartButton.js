import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {

     const [btnIsHightLighted, setBtnIsHightLighted] = useState(false)

     const cartData = useContext(CartContext);



     const numberOfCartItems = cartData.item.reduce((curNumber, item) => {

          return curNumber + item.amount;

     }, 0);


     const btnClasses = `${classes.button} ${btnIsHightLighted ? classes.bump : ''}`;



     useEffect(() => {

          if (cartData.item.length === 0) {
               return;
          }
          setBtnIsHightLighted(true);

          const timer = setTimeout(() => {
               setBtnIsHightLighted(false)
          }, 300);

          return () => {

               clearTimeout(timer);
               
          }
     }, [cartData.item])

     return (
          <button className={btnClasses} onClick={props.onClick}>
               <span className={classes.icon}>
                    <CartIcon />
               </span>
               <span>
                    Your Cart
               </span>
               <span className={classes.badge}>
                    {numberOfCartItems}
               </span>
          </button>
     )
}

export default HeaderCartButton