import React, { useEffect, useState } from "react";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const { carter } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(carter.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [carter]);
  return (
    <div>
      <div className="flex justify-evenly">
        <span style={{ fontSize: 30 }}>My Cart</span>
        <span style={{ fontSize: 30 }}>Total: {total}</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-4">
        {carter.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
