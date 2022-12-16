import React from "react";
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
const Home = () => {
  const { products } = CartState();
  //  console.log("product", products)
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
