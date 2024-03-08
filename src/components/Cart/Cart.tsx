import React from 'react';
import CartDishes from './CartDishes';
import { useAppSelector } from '../../app/hooks';
import { selectCartDishes } from '../../store/cartSlice';

const Cart: React.FC = () => {
  const cartDishes = useAppSelector(selectCartDishes);

  let cartContent;

  if (cartDishes.length === 0) {
    cartContent = (
      <div className="alert alert-primary">
        Cart is empty!
      </div>
    );
  } else {
    cartContent = (
      <>
        <CartDishes cartDishes={cartDishes} />
      </>
    );
  }

  return (
    <div className="cart-container">
      <h4>Cart</h4>
      {cartContent}
    </div>
  );
};

export default Cart;
