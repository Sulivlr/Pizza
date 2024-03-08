import React from 'react';
import Dishes from '../Pizza/Dishes';
import Cart from './Cart/Cart';

const Home: React.FC = () => {
  return (
    <div className="row mt-2">
      <div className="col-7">
        <Dishes />
      </div>
      <div className="col-5">
        <Cart />
      </div>
    </div>
  );
};

export default Home;