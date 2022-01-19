import React from 'react';
import Products from './Products';
import home from '../../public/assets/home.svg';

const Home = () => {
  return (
    <div className="hero">
      <div className="row text-white bg-dark" style={{ padding: '20px' }}>
        <div className="col-md-8">
          <div className="align-items-end d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-4 fw-bolder mb-0">
                CELEBRATE CHRISTMAS EVE
              </h5>
              <p className="card-text lead fs-3">BUYING PRODUCTS YOU LIKE</p>
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-4">
          <img
            src={home}
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

      <Products />
    </div>
  );
};

export default Home;
