import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import login from '../../public/assets/login.svg';
import orderImg from '../../public/assets/order.svg';

const Order = () => {
  const history = useHistory();
  const state = useSelector((state) => state.handleCart);
  const order = useSelector((state) => state.handleOrder);
  const [subTotal, setSubTotal] = useState();
  const userState = useSelector((state) => state.handleUser);

  useEffect(() => {
    calcSubTotal(order, 0);
  }, [order]);

  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), 3 * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );
  const Loading = () => {
    return (
      <>
        <div className="col-md-4 mx-2 px-2">
          <Skeleton height={400} />
        </div>
        {''}
        <div className="col-md-8 mx-2 px-2">
          <Skeleton height={300} />
        </div>
      </>
    );
  };
  const NoUser = () => {
    const handleClick = () => {
      history.push('/login');
    };

    return (
      <div>
        <div className="row  bg-light" style={{ padding: '20px' }}>
          <div className="col-md-8">
            <div className="align-items-end d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-4 fw-bolder mb-0">
                  LOGIN TO CHECK ORDERS
                </h5>
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-4">
            <img
              src={login}
              className="align-items-end"
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

  const calcSubTotal = (state, tempCoupon) => {
    if (state !== undefined && state !== null && state !== []) {
      let grandTot = 0;
      state.map((element) => (grandTot += element.price * element.quantity));
      //console.log(grandTot - tempCoupon);
      setSubTotal(grandTot - tempCoupon);
    }
  };
  return (
    <div className="container " style={{ padding: '20px', display: 'flex' }}>
      {userState === null || state == [] ? (
        <NoUser />
      ) : !show ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-md-4">
            <img
              src={orderImg}
              className="align-items-end"
              alt="Background"
              style={{
                maxWidth: '100%',
                height: 'auto',
                padding: '10px',
              }}
            />
          </div>
          <br />
          <div className="col-md-8">
            <div className="align-items-end d-flex flex-column justify-content-center">
              <div className="container">
                <div className="card">
                  <div className="card-header bg-success text-light">
                    Hurray Order Placed
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Products</h3>
                    <p className="card-text">Here is your list of products</p>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Item Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>

                        {order.map(
                          (product) => (
                            console.log(product),
                            (
                              <tbody key={product.id}>
                                <tr>
                                  <th scope="row">{product.id}</th>
                                  <td>{product.title}</td>
                                  <td>{product.quantity}</td>
                                  <td>$ {product.price}</td>
                                </tr>
                              </tbody>
                            )
                          )
                        )}
                        <tfoot>
                          <tr>
                            <td></td>
                            <td>Total Price</td>
                            <td></td>
                            <td>$ {Math.round(subTotal * 100) / 100}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Order;
