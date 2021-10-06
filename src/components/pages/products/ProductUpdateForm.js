import React, { useState, useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import ProductContext from "../../../context/product/productContext";

const ProductUpdateForm = () => {
  const productContext = useContext(ProductContext);

  const { addProduct, updateProduct, current } = productContext;

  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    if (current !== null) {
      setName(current.name);
      setPrice(current.price);
      setDescription(current.description);
    } else {
      setName("");
      setPrice("");
      setDescription("");
      ref.current.value = "";
    }
  },[]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      price,
      file,
    };
    product.id = current.id;
    updateProduct(product);
    clearForm();
    history.push("/");
  };

  const clearForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    ref.current.value = "";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='col-sm-6 mx-auto my-5 text-center'>
          <h1 className='display-4 my-5'>Update Product</h1>
          <input
            type='text'
            className='form-control mb-4'
            placeholder='name'
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            className='form-control mb-4'
            placeholder='price'
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type='text'
            className='form-control mb-4'
            placeholder='description'
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type='file'
            className='form-control mb-4'
            ref={ref}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div>
            <input
              type='submit'
              value='Update Product'
              className='btn btn-success btn-block w-sm-25'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdateForm;
