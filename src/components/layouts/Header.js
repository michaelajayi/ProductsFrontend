import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import getUser from "../../utils/getUser";
import isAuthorized from "../../utils/isAuthorized";

const Header = () => {
  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/login");
  };

  const user = useRef("");
  useEffect(async () => {
    user.current = await getUser();
    console.log(user.current);
  }, []);

  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/' className='mx-5'>
          Products Store
        </Navbar.Brand>
        <Nav className='mr-auto navbar-wrapper flex-grow-1'>
          <Link
            to='/products'
            className={`d-${isAuthorized() === null ? "none" : "block"}`}
          >
            Products
          </Link>
          <Link
            to='/add-product'
            className={`d-${isAuthorized() === null ? "none" : "block"}`}
          >
            Add Product
          </Link>

          <Link
            to='/login'
            className={`d-${isAuthorized() === null ? "block" : "none"}`}
          >
            Login
          </Link>
          <Link
            to='/register'
            className={`d-${isAuthorized() === null ? "block" : "none"}`}
          >
            Register
          </Link>
        </Nav>
        <Nav
          style={{ marginRight: "3rem" }}
          className={`d-${isAuthorized() === null ? "none" : "block"}`}
        >
          <NavDropdown
            className='badge bg-dark text-white'
            title={user.current.name}
          >
            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
