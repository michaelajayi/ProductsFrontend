import React, { useEffect } from "react";
import ProductForm from "./products/ProductForm";
import isAuthorized from "../../utils/isAuthorized";
import { useHistory } from "react-router-dom";
import Login from "../Auth/Login";
import ErrorPage from "../layouts/ErrorPage";

const AddProduct = () => {
  const history = useHistory();
  //  useEffect(() => {
  //    if (isAuthorized() === null)
  //      history.push("/login");
  //  }, []);

  const error = {
    type: "danger",
    msg: "Please login to access this page",
  };

  return (
    <div>
      {isAuthorized() === null ? <ErrorPage error={error} /> : <ProductForm />}
    </div>
  );
};
export default AddProduct;
