import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
 const [cartitems, setCartItems] = useState([]);

     const addToCart = (product) => {
         setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (!existingItem) {
              return [...prevItems, { ...product, quantity: 1 }];
            } else {
              return prevItems;
            }
         });
     };

     const removeCart = (product) => {
         setCartItems((prevItems) => {
            return prevItems.filter((item) => item.id !== product.id);
         });
     };

     const contextValue = {
         cartitems,
         addToCart,
         removeCart,
     };

     return (
         <ProductContext.Provider value={contextValue}>
            {children}
         </ProductContext.Provider>
     );
};