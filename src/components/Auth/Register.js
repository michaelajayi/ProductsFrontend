import React, { Fragment, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    let newUser = {
      name,
      email,
      password,
    };

    let res = await fetch(
      "https://laravel-product-api.herokuapp.com/api/register",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }
    );
    res = await res.json();
    localStorage.setItem("user", JSON.stringify(res));
  };

  return (
    <Fragment>
      <div className='col-md-8 col-lg-4 mx-auto text-center mt-4'>
        <h1 className='my-5 display-4'>Register</h1>
        <input
          type='text'
          className='form-control mb-4'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          className='form-control mb-4'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='form-control mb-4'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-dark w-100' onClick={signUp}>
          Sign up
        </button>
      </div>
    </Fragment>
  );
};

export default Register;
