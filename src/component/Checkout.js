import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData } from '../redux/action';

const Checkout = () => {
  const state = useSelector((state) => state.userData);
  console.log(state);
  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
