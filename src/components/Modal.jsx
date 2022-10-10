import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cart/cartSlice";
import { hideModal } from "../redux/features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <aside className="modal-container">
        <div className="modal">
          <h4>remove all items from your shopping cart?</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart())
                dispatch(hideModal())
            }}
            >
              confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => dispatch(hideModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Modal;
