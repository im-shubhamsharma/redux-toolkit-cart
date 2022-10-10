import { useState, useEffect } from "react";
import Navbar from "./components//Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { totalAmountPrice, fetchData } from "./redux/features/cart/cartSlice";

function App() {
  const url = "https://course-api.com/react-useReducer-cart-project";
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(url));
  }, []);

  useEffect(() => {
    dispatch(totalAmountPrice());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
