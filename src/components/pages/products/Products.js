import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import ProductItem from "./ProductItem";
import ProductContext from "../../../context/product/productContext";
import isAuthorized from "../../../utils/isAuthorized";

const Products = () => {
  const productContext = useContext(ProductContext);
  const { products, getProducts } = productContext;
  const history = useHistory();

    const error = {
      type: "danger",
      msg: "Please login to access this page",
    };

  useEffect(() => {
    if (isAuthorized() === null) {
      history.push('/login');
    } else {
      getProducts();
      //eslint-disable-next-line
    }
  }, []);

  return (
    <div>
      
      <div className='col-sm-10   mx-auto my-5'>
        <h1 className='display-4 text-center mt-5 mb-4'>Product List</h1>
        <p className='text-center mb-5 w-75 mx-auto'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          voluptatem iusto suscipit voluptates optio placeat aspernatur harum
          exercitationem dignissimos accusantium.
        </p>
        <h1 className='display-6 text-center'>
          {" "}
          {products.length <= 0
            ? 'No products in table yet!'
            : ''}
          
        </h1>

        <div style={productStyle}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const productStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "3rem",
};

export default Products;
