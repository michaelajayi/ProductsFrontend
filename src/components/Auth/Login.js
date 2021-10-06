import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getUser from '../../utils/getUser';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
  }, []);
  
  const login = async () => {
    const user = {
      email,
      password,
    };
    try {
      let res = await fetch(
        "https://laravel-product-api.herokuapp.com/api/login",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      res = await res.json();
      if (res.success === true) {
        localStorage.setItem("token", JSON.stringify(res));
        history.push("/");
        history.push("/");
      } else {
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div>
        <div className='col-md-8 col-lg-4 mx-auto text-center'>
          <h1 className='display-4 my-5'>Login</h1>
          <input
            type='text'
            className='form-control mb-4'
            value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            className='form-control mb-4'
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn btn-primary w-100' onClick={login}>
            Login
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
