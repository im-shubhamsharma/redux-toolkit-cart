import React from "react";
import { ChevronUp, ChevronDown } from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleQuantity, removeItem } from "../redux/features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem({ id }))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(toggleQuantity({ id: id, type: "inc" }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() =>
            amount === 1
              ? dispatch(removeItem({ id }))
              : dispatch(toggleQuantity({ id: id, type: "dec" }))
          }
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
