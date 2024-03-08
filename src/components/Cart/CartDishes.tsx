import React from 'react';
import CartItem from './CartItem';
import {CartDish} from '../../types';

interface Props {
  cartDishes: CartDish[];
}

const CartDishes: React.FC<Props> = ({cartDishes}) => {
  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.dish.price * cartDish.amount;
  }, 0);

  return (
    <>
      {cartDishes.map(cartDish => (
        <CartItem
          key={cartDish.dish.id}
          cartDish={cartDish}
        />
      ))}
      <div className="card border-0 p-2 mt-3">
        <div className="row align-items-center">
          <div className="col text-right">
            <strong>Total:</strong>
          </div>
          <div className="col-3 text-right">
            <strong>{total} KGS</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDishes;