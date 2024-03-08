import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {ApiDishes, Dish} from '../types';


export const fetchPizza = createAsyncThunk<Dish[]>(
  'pizzas/fetchAll',
  async () => {
    const {data: pizza} = await axiosApi.get<ApiDishes | null>('/pizza.json');

    if (!pizza) {
      return [] as Dish[];
    }

    return Object.keys(pizza).map(key => ({
      id: key,
      ...pizza[key],
    }));
  }
);

export const deleteDish = createAsyncThunk<void, string>(
  'pizza/delete',
  async (pizzaId) => {
    await axiosApi.delete('/pizza' + pizzaId + '.json');
  },
);