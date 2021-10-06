import React, { useReducer } from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import getAuthToken from "../../utils/getAuthToken";
import axios from "axios";

import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_ERROR,
  SET_CURRENT,
} from "../types";

const url = "https://laravel-product-api.herokuapp.com/api";

const ProductState = (props) => {
  const initialState = {
    products: [],
    current: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const token = getAuthToken();

  const getProducts = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/products`);

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.status,
      });
    }
  };

  // Add Product
  const addProduct = async (product) => {
    const formData = new FormData();

    const { name, price, description, file } = product;

    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.post(`${url}/products`, formData, config);

      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.delete(`${url}/products/${id}`, config);

      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    } catch (err) {
      console.log(err.response.data.message);
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  // Set Current Product
  const setCurrent = (product) => {
    dispatch({ type: SET_CURRENT, payload: product });
  };

  // Update Product
  const updateProduct = async (product) => {
    const formData = new FormData();

    const { id, name, price, description, file } = product;

    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${url}/products/${id}`, product, config);

      dispatch({
        type: UPDATE_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        current: state.current,
        getProducts,
        addProduct,
        deleteProduct,
        updateProduct,
        setCurrent,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
