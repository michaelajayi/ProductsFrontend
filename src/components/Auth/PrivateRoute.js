import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

import Products from "../pages/products/Products";

const PrivateRoute = ({
  component: Component,
  user: { isAuthenticated, token },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && token === null ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
}

export default PrivateRoute;
