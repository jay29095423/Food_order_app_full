import React from 'react'
import classes from './Header.module.css'
import meals_img from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {

    
     return (
          <>
              
               <header className={classes.header}>
                    <h1>ReactMeals</h1>
                    <HeaderCartButton onClick={props.switchCart} />
               </header>

               <div className={classes['main-image']}>
                    <img src={meals_img} alt='A table full of delicious food' />
               </div>

               
          </>
     )
}


export default Header