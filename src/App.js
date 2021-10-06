import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/layouts/Header";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProductState from "./context/product/ProductState";
import AddProduct from "./components/pages/AddProduct";
import Products from "./components/pages/products/Products";
import ProductUpdateForm from "./components/pages/products/ProductUpdateForm";
import isLoggedIn from "./utils/isAuthorized";
import getUser from "./utils/getUser";

function App() {
  const [user, setUser] = useState({});

  // useEffect(async () => {
  //   const user = await getUser();
  //   //  console.log(await getUser());
  //   console.log(user);
  // }, []);

  return (
    <ProductState>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/products' component={Products} />
            <Route
              exact
              path={"/products/update/:id"}
              component={ProductUpdateForm}
            />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/add-product' component={AddProduct} />
          </Switch>
        </div>
      </Router>
    </ProductState>
  );
}

export default App;
