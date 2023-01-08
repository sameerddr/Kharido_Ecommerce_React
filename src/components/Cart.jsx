import React from "react";
import { useCartContext } from "./context/cart_context";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

import "./Cart.css";
import FormatPrice from "./helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
  // console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="cartDiv">
        <h1>No item in Cart</h1>
      </div>
    );
  }

  return (
    <div className="cartDiv">
      <div className="cartdata">
        <div className="headdata">
          <div className="itemdata">
            <p className="item-p">Item</p>
          </div>
          <p className="cart_hide">Price</p>
          <p className="q">Quantity</p>
          <p className="cart-hide2">Subtotal</p>
          <p>Remove</p>
        </div>
      </div>
      <hr />

      <div className="cart-item">
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </div>

      <div className="cart-two-button">
        <NavLink to="/product">
          <button>Continue Shopping</button>
        </NavLink>
        <NavLink>
          <button onClick={clearCart}>Clear Cart Items</button>
        </NavLink>
      </div>

      {/* // totol amount */}

      <div className="order-total-amount">
        <div className="order-total">
          <div>
            <p>
              <b>Total:</b> <FormatPrice price={total_amount} />
            </p>
            <div>
              <p>
                <b>Shipping Fee: </b> <FormatPrice price={shipping_fee} />{" "}
              </p>
            </div>
            <hr />
            <p>
              <b> Amount Payable: </b>
              <FormatPrice price={shipping_fee + total_amount} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
