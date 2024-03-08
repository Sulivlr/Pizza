import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectDeleteDishLoading, selectDishes, selectFetchLoading} from '../store/pizzaSlice';
import {deleteDish, fetchPizza} from '../store/dishesThunks';
import DishItem from './DishItem';
import ButtonSpinner from '../components/buttonSpinner';

const Dishes : React.FC= () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const fetchLoading = useAppSelector(selectFetchLoading);
  const deleteLoading = useAppSelector(selectDeleteDishLoading);

  const removeDish = async (id: string) => {
    await dispatch(deleteDish(id));
    await dispatch(fetchPizza());
  };

  useEffect(() => {
    dispatch(fetchPizza());
  }, [dispatch]);

  return (
    <div>
      <h4>Dishes</h4>
      {fetchLoading ? <ButtonSpinner/> : dishes.map(dish => (
        <DishItem key={dish.id} dish={dish} onDelete={() => removeDish(dish.id)} deleteLoading={deleteLoading} />
      ))}
    </div>
  );
};

export default Dishes;