import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart, userLogin, userLogout } from '../redux/action';
import cart from '../../public/assets/cart.svg';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const userState = useSelector((state) => state.handleUser);
  const dispatch = useDispatch();
  console.log(userState);
  console.log(state);

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  /*const loCheck = () => {
    if(userState!= null){

    }
    var name = 'vij';
    var password = '123';
    dispatch(userLogin({ name: name, password: password, loggedIn: true }));
  };*/

  const emptyCart = () => {
    return (
      <div>
        <div class="row  bg-light" style={{ padding: '20px' }}>
          <div class="col-md-8">
            <div className="align-items-end d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-4 fw-bolder mb-0">
                  YOUR CART IS EMPTY
                </h5>
                <p className="card-text lead fs-3">CHECK OUT ALL THE TRENDS</p>
              </div>
            </div>
          </div>
          <br />
          <div class="col-md-4">
            <img
              src={cart}
              class="align-items-end"
              alt="Background"
              style={{
                maxWidth: '100%',
                height: 'auto',
                padding: '10px',
              }}
            />
          </div>
        </div>
      </div>
    );
  };
  const cartItems = () => {
    return (
      <>
        <div class="container">
          <div class="row" style={{ padding: '10px' }}>
            <h3>Cart Items</h3>
            <div class="col-12">
              <table class="table table-image">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope="col">Add/Del</th>
                  </tr>
                </thead>
                {state.map((product) => (
                  <tbody>
                    <tr>
                      <td style={{ width: '100px' }}>
                        <img
                          src={product.image}
                          class="img-fluid img-thumbnail"
                          alt={product.id}
                        />
                      </td>
                      <td>{product.title}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity * product.price}</td>
                      <td>
                        <button
                          className="btn btn-outline-primary mx-2 px-2"
                          onClick={() => handleAdd(product)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                        <button
                          className="btn btn-outline-danger mx-2 px-2"
                          onClick={() => handleDel(product)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            {userState != null ? (
              <NavLink
                to="/shipping"
                className="btn btn-outline-dark mb-5 w-25 mx-auto"
              >
                Checkout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-outline-dark mb-5 w-25 mx-auto"
              >
                Checkout
              </NavLink>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && cartItems()}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
