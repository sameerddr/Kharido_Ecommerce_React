import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./helpers/FormatPrice";

import "./ProductHome.css";

const ProductHome = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <div className="pro">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={image} alt={name} />
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h4>{name}</h4>
              <p className="card-data--price">
                {<FormatPrice price={price} />}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductHome;
