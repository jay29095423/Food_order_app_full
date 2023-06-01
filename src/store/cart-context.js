import React from "react";

const CartContext = React.createContext({  //給VScode自動生成內容用的，沒有實際意義
     item: [],
     totalAmount: 0,
     addItem: (item) => { },
     removeItem: (id) => { }
});

export default CartContext;