import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { addCart } from '../redux/action';
import { useDispatch } from 'react-redux';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();
  const addProduct = (item) => {
    dispatch(addCart(item));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div
          className="buttons flex-md-column  justify-content-center pb-3 mb-3 "
          style={{ textAlign: 'center' }}
        >
          <button
            className="btn btn-outline-dark  mx-2 px-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark m-2  px-2 "
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark m-2  px-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark  m-2  px-2"
            onClick={() => filterProduct('jewelery')}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark m-2  px-2"
            onClick={() => filterProduct('electronics')}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div
                className="col-md-3 mb-4"
                key={product.id}
                style={{ padding: '20px' }}
              >
                <div className="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 50)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                  </div>

                  <div className="row">
                    <div className="col">
                      <button
                        className="btn btn-outline-dark mx-2 px-2"
                        onClick={() => addProduct(product)}
                      >
                        <i className="fa fa-shopping-cart mx-2 px-2"></i>
                      </button>
                    </div>
                    <div className="col">
                      <NavLink
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark mx-2 px-2"
                      >
                        Details..
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
