import React from 'react';

const Footer = () => {
  return (
    <div className="foot">
      <footer className=" row text-center text-lg-start bg-dark text-muted">
        <section className="d-flex flexwrap justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i> E-Cart Shop
                </h6>
                <p>
                  Shop were you can buy products you like. Order products & stay
                  Happy.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Electronics
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Clothing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Bags & Footwear
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Beauty & Health
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="bi bi-house-door-fill me-3"></i> New York, NY
                  10012, US
                </p>
                <p>
                  <i className="bi bi-envelope me-3"></i>
                  query@ecartshop.com
                </p>
                <p>
                  <i className="bi bi-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="bi bi-printer-fill me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2021 Copyright:
          <a
            className="text-reset fw-bold"
            href="https://react-gzh6x2.stackblitz.io/"
          >
            MyOwnBuild.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
