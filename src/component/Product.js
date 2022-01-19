import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [sug_prod, setSugProd] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sug_lod, setSugLoad] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      console.log(id);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const handleClick = () => {
    const fetchData = async () => {
      setSugLoad(true);
      const sug_response = await fetch(
        `https://fakestoreapi.com/products/category/${product.category}`
      );
      setSugProd(await sug_response.json());

      setSugLoad(false);
    };
    fetchData();
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const Soading = () => {
    return (
      <>
        <div className="col py-4" style={{ lineHeight: 2 }}>
          <Skeleton height={400} width={300} style={{ marginLeft: 5 }} />
          <Skeleton height={400} width={300} style={{ marginLeft: 5 }} />
          <Skeleton height={400} width={300} style={{ marginLeft: 5 }} />
          <Skeleton height={400} width={300} style={{ marginLeft: 5 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: '100%',
              height: '500px',
              padding: '10px',
              textAlign: 'center',
            }}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
          <button
            className="btn btn-outline-dark ms-2 px-3 py-2"
            onClick={handleClick}
          >
            Show Suggestion
          </button>
        </div>
      </>
    );
  };

  const SuggestionProd = () => {
    return (
      <div class="row">
        {sug_prod.map((prod) => (
          <div
            className="col md-4"
            style={{
              display: 'flex',
              height: 'auto',
              width: 'auto',
              padding: '10px',
              flexWrap: 'warp',
            }}
          >
            <div class="card " style={{ width: '18 rem' }}>
              <img
                src={prod.image}
                class="card-img-top"
                alt="..."
                style={{
                  width: '200px',
                  height: '150px',
                  padding: '10px',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              />
              <div class="card-body">
                <h5 class="card-title ">{prod.title}</h5>
                <p class="card-text ">${prod.price}</p>
              </div>
              <div className="card-footer bg-white">
                <button className="btn btn-dark ms-2 px-3 py-2 ">
                  Show Suggestion
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
        <div className="row py-4">
          {sug_lod ? (
            <Soading />
          ) : (
            <>
              <p>Similar Suggestion</p>
              <SuggestionProd />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
