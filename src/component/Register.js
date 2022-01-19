import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { registerUser } from '../redux/action';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      registerUser({
        name: name,
        password: password,
        email: email,
        phone: phone,
        address: address,
        loggedIn: false,
      })
    );
    history.push('/login');
  };
  return (
    <div className="container" style={{ padding: '20px' }}>
      <form>
        <div class="mb-3">
          <label for="exampleName" class="form-label">
            Name
          </label>
          <input
            value={name}
            type="name"
            class="form-control"
            id="exampleName"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            value={email}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            value={password}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleAddress" class="form-label">
            Address
          </label>
          <input
            value={address}
            type="text"
            class="form-control"
            id="exampleAddress"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleTel" class="form-label">
            Phone
          </label>
          <input
            value={phone}
            type="tel"
            class="form-control"
            id="exampleTel"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Register
        </button>
        <NavLink to="/login" class="btn btn-dark" style={{ margin: '5px' }}>
          Already user? Sign in
        </NavLink>
      </form>
    </div>
  );
};

export default Register;
