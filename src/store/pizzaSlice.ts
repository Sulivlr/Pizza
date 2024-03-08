import {Dish} from '../types';
import {createSlice} from '@reduxjs/toolkit';

interface PizzaState {
  dishes: Dish[];
  fetchLoading: boolean;
}

const initialState: PizzaState = {
  dishes: [],
  fetchLoading: false,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
})

export const pizzaReducer = pizzaSlice.reducer;