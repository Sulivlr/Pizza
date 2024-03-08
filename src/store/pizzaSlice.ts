import {Dish} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {deleteDish, fetchPizza} from './dishesThunks';


interface PizzaState {
  dishes: Dish[];
  fetchLoading: boolean;
  deleteLoading: false | string;
}

const initialState: PizzaState = {
  dishes: [],
  fetchLoading: false,
  deleteLoading: false,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchPizza.fulfilled, (state, {payload: dishes}) =>{
      state.fetchLoading = false;
      state.dishes = dishes;
    }).addCase(fetchPizza.rejected, (state) => {
      state.fetchLoading = false;
    });

    builder.addCase(deleteDish.pending, (state, {meta: {arg: dishId}}) => {
      state.deleteLoading = dishId;
    }).addCase(deleteDish.fulfilled, (state) => {
      state.deleteLoading = false;
    }).addCase(deleteDish.rejected, (state) => {
      state.deleteLoading = false;
    });
  }
});

export const pizzaReducer = pizzaSlice.reducer;
export const selectDishes = (state: RootState) => state.pizza.dishes;
export const selectDeleteDishLoading = (state: RootState) => state.pizza.deleteLoading;
export const selectFetchLoading = (state: RootState) => state.pizza.fetchLoading;
