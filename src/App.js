import Header from "./component/layout/header";
import Meals from "./component/meals/meals";
import './App.module.css';
import Cart from "./component/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
;

function App() {

  const [showCart, setShowCart] = useState(false)

  const switchCart = () => {
    setShowCart(x => !x)
  }

  return (
    <CartProvider>
      {showCart && <Cart switchCart={switchCart} />}
      <Header switchCart={switchCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
