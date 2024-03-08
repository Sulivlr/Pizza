export interface ApiDish {
  title: string;
  price: string;
  image: string;
}

export interface ApiDishes {
  [id: string]: ApiDish;
}

export interface Dish extends ApiDish {
  id: string;
}

export interface CartDish {
  dish: Dish;
  amount: number;
}

