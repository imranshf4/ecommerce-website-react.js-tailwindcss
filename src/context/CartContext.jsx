import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({children}) =>{
   const [cartToggle, setCartToggle] = useState(false);
  
  const handleCartToggle = () => {
    setCartToggle(prevState => !prevState);
  };
    return(
        <CartContext.Provider value={{cartToggle, handleCartToggle}}>
            {children}
        </CartContext.Provider>
    );
}

// Create a custom hook for using the cart context
export const useCart = () => useContext(CartContext);