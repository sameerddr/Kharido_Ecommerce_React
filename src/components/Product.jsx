import React from "react";
import { useProductContext } from "./context/Productcontext";
import ProductHome from "./ProductHome";

import "./Product.css";

const Product = () => {
  const { products } = useProductContext();

  // console.log(products);

  return (
    <>
      <div className="data">
        <div className="prod">
          {products.map((curElem) => {
            return <ProductHome key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
