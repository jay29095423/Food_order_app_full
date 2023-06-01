import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = props => {

     const [amountIsValid, setAmountIsValid] = useState(true)

     const amountInputRef = useRef();

     const submitHandler = event => {
          event.preventDefault();

          const enterAmount = amountInputRef.current.value;

          const enterAmountNumber = +enterAmount;

          if (
               enterAmount.trim().length === 0 ||
               enterAmountNumber < 1 ||
               enterAmountNumber > 5
          ) {
               setAmountIsValid(false)
               return;
          }


          props.onAddToCart(enterAmountNumber)

     }



     return (

          <form className={classes.form} onSubmit={submitHandler}>
               <Input
                    ref={amountInputRef}

                    label="Amount"

                    input={{

                         id: 'amount_' + props.id,
                         type: "number",
                         max: '5',
                         min: '1',
                         step: '1',
                         defaultValue: '1'
                    }} />

               <button>+ Add</button>
               {!amountIsValid && <p>Please enter a valid value (1~5)</p>}
          </form>

     )
}

export default MealItemForm