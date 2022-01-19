import React, { useState } from 'react';
import './style.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Footer from './component/Footer';
import Checkout from './component/Checkout';
import Login from './component/Login';
import Register from './component/Register';
import Shipping from './component/Shipping';
import Order from './component/Order';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
