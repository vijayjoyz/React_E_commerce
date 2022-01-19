const userD = null;

const handleUser = (state = userD, action) => {
  const user = action.payload;
  switch (action.type) {
    case 'USERLOGIN':
    //console.log('Reducer Login invoked');

    case 'USERLOGOUT':
      //console.log('Reducer Login invoked 2');
      state = action.payload;
    case 'REGISTER_USER':
      //console.log('Reducer user registered');
      state = user;
      console.log(state);
    default:
      //console.log('Reducer Login invoked 3');
      return state;
  }
};

export default handleUser;
