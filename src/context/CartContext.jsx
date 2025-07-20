import { createContext, useReducer, useContext, useEffect } from "react";

function itemsReducer(items, action){
    switch(action.type){
    case "ADD_ITEM":
      const existing = items.find((item) => item.id === action.payload.id);
      if (existing) {
        return items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...action.payload, quantity: 1 }];

    case "REMOVE_ITEM":
      return items.filter((item) => item.id !== action.payload.id);

    case "INCREMENT":
      return items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT":
      return items.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return items;
  }
}

const CartContext = createContext()

export function CartProvider({ children }){
    const [items, dispatch] = useReducer(itemsReducer, [], ()=>{
        const saved = localStorage.getItem("cart-items");
        return saved ? JSON.parse(saved) : [];
      });

      useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(items));
  }, [items]);
  
    return(
        <CartContext.Provider value={{items, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}