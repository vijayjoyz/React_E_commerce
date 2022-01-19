const ordered_products = [];

const handleOrder = (state = ordered_products, action) => {
  switch (action.type) {
    case 'ORDER_PRODUCT':
      state = action.payload;

    default:
      //console.log('Reducer Order invoked');
      return state;
  }
};

export default handleOrder;
