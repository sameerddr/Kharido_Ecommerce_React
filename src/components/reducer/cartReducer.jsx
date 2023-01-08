const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    // console.log(product);

    let cartProduct;

    cartProduct = {
      id: id + amount,
      name: product.name,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to clear cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // to set increment and decrement

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem);
        let decAmount = curElem.amount - 1;

        if (decAmount <= 0) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem);
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
          alert("Limit Reached in Stock");
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  // calculate subtotal

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let total_amount = state.cart.reduce((initialvalue, curElem) => {
  //     let { price, amount } = curElem;

  //     initialvalue = initialvalue + price + amount;
  //     return initialvalue;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_amount,
  //   };
  // }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_amount } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_amount += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_amount: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_amount,
    };
  }

  return state;
};

export default cartReducer;
