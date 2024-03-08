import React from 'react';
import {CartDish} from "../types";

interface Props {
  cartDish: CartDish;
}

const CartItem: React.FC<Props> = ({cartDish}) => {
  const totalPrice = cartDish.dish.price * cartDish.amount;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">{cartDish.dish.title}</h6>
            <small className="text-muted">Price: {cartDish.dish.price} KGS</small>
          </div>
          <div className="d-flex align-items-center">
            <span className="mr-2">x{cartDish.amount}</span>
            <strong>{totalPrice} KGS</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;