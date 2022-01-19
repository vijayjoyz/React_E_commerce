// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

// For Delete Item From Cart
export const delCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};

export const delTotCart = () => {
  return {
    type: 'DEL_CART',
    payload: [],
  };
};

export const userLogin = (user) => {
  console.log('Action invoked');
  return {
    type: 'USERLOGIN',
    payload: user,
  };
};

export const useLogout = () => {
  return {
    type: 'USERLOGOUT',
    payload: null,
  };
};

export const registerUser = (user) => {
  return {
    type: 'REGISTER_USER',
    payload: user,
  };
};

export const orderProduct = (items) => {
  return {
    type: 'ORDER_PRODUCT',
    payload: items,
  };
};
