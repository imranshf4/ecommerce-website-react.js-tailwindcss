import { createContext, useContext, useState } from "react";
const AddToCartContext = createContext();

export const AddToCartProvider = ({children}) =>{
   const [cart, setCart] = useState([]);
  
    return(
        <AddToCartContext.Provider value={{cart, setCart}}>
            {children}
        </AddToCartContext.Provider>
    );
}

// Create a custom hook for using the cart context
export const useAddToCartContext = () => useContext(AddToCartContext);