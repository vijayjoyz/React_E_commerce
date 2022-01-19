import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { orderProduct,delTotCart } from '../redux/action';

const Shipping = () => {
  const history = useHistory();
  const userState = useSelector((state) => state.handleUser);
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const [step, setStep] = useState(null);

  useEffect(() => {
    const getId = () => {
      var stepper = new Stepper(document.querySelector('#stepper1'), {
        linear: false,
        animation: true,
      });
      setStep(stepper);
    };
    getId();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setStep(step.next());
  };

  const handleSubmit = () => {
    dispatch(orderProduct(state));
    dispatch(delTotCart());
    history.push('/order');
  };

  return (
    <div>
      <div id="stepper1" class="bs-stepper container">
        <div class="bs-stepper-header">
          <div class="step" data-target="#test-l-1">
            <button class="step-trigger">
              <span class="bs-stepper-circle">1</span>
              <span class="bs-stepper-label">Address</span>
            </button>
          </div>
          <div class="line"></div>
          <div class="step" data-target="#test-l-2">
            <button class="step-trigger">
              <span class="bs-stepper-circle">2</span>
              <span class="bs-stepper-label">Payment</span>
            </button>
          </div>
        </div>
        <div class="bs-stepper-content">
          <form onSubmit={this.onSubmit}>
            <div id="test-l-1" class="content">
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleAddress"
                  placeholder="Enter Address"
                  value={userState.address}
                />
                <br />
                <label for="phone">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="examplePhone"
                  placeholder="Enter Phone number"
                  value={userState.phone}
                />
              </div>
              <br />
              <button class="btn btn-primary" onClick={handleClick}>
                Next
              </button>
            </div>

            <div id="test-l-2" class="content">
              <div class="form-group">
                <label for="exampleName">Name on card</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <br />
                <label for="exampleCard">Credit Card number</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Credit Card Number"
                />
                <br />
                <label for="exampleExpiration">Expiration</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="MM/YY"
                />
                <br />
                <label for="exampleName">CVV</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="CVV number"
                />
              </div>

              <button class="btn btn-primary mt-5" onClick={handleSubmit}>
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
