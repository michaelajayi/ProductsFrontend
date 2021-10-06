import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

const ProductItemDetails = (props) => {
  const { name, description, price, file_path } = props.product;

  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Product Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
        <img
          src={"https://laravel-product-api.herokuapp.com/" + file_path}
          img
          alt={description}
          style={{ width: "100%" }}
        />
        <h4 className='display-5 my-3'>{name}</h4>
        <p className='badge bg-success'>Price: ${price}</p>
      </Modal.Body>
    </Modal>
  );
};

ProductItemDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItemDetails;
