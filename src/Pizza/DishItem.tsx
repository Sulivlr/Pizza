import React from 'react';
import { Dish } from '../types';
import { useAppDispatch } from '../app/hooks';
import { addDish } from '../store/cartSlice';
import ButtonSpinner from '../components/buttonSpinner';

const noImageAvailable = 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';

interface Props {
  dish: Dish;
  onDelete: React.MouseEventHandler;
  deleteLoading: boolean | string | false;
}

const DishItem: React.FC<Props> = ({ dish, onDelete, deleteLoading }) => {
  const dispatch = useAppDispatch();
  const image = dish.image || noImageAvailable;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`,
  };

  const isLoading = deleteLoading === dish.id;

  const addDishToCart = () => {
    dispatch(addDish(dish));
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="rounded-start" style={{ ...imageStyle, height: '200px' }}></div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{dish.title}</h5>
            <p className="card-text small">{dish.price} KGS</p>
            <button className="btn btn-success" onClick={addDishToCart} disabled={isLoading}>
              Add to Order
            </button>
            <button className="btn btn-primary" onClick={onDelete} disabled={isLoading}>{isLoading && <ButtonSpinner/>} Delete from Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
