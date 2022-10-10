import React from 'react'
import CartItem from './CartItem';
import cartItems from '../utils/cartItems'

const CartContainer = () => {


  if (5 < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$0</span>
          </h4>
        </div>
        <button className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer