import handleCart from './handleCart';
import handleUser from './users';
import handleOrder from './order';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  handleCart,
  handleUser,
  handleOrder,
});

export default rootReducers;
