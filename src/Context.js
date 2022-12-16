import React, { createContext, useContext, useState } from 'react'
import faker from "faker";
export const Carter = createContext();
faker.seed(100);
const Context = ({children}) => {
    const [carter, setCarter] = useState([]);
    const productsArray = [...Array(20)].map((p) => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
      }));
      const [products] = useState(productsArray);
    
  return (
    <Carter.Provider value={{carter,setCarter,products}}>{children}</Carter.Provider>
  )
}
export const CartState = () => {
    return useContext(Carter);
  };

export default Context