import React from "react";

import { FaTrash } from "react-icons/fa";
import { useCartContext } from "./context/cart_context";
import FormatPrice from "./helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";

import "./CartItem.css";

const CartItem = ({ id, name, image, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  return (
    <>
      <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt={id} className="item-img" />
            </figure>
          </div>
          <div>
            <p>{name}</p>
          </div>
        </div>
        {/* price   */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>

        {/* Quantity  */}
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrease(id)}
        />

        {/* //Subtotal */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount} />
          </p>
        </div>

        <div>
          <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
