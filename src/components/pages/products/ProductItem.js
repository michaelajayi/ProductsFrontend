import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
import ProductItemDetails from "./ProductItemDetails";

import ProductContext from "../../../context/product/productContext";

const ProductItem = ({ product }) => {
  const productContext = useContext(ProductContext);

  const { deleteProduct, setCurrent } = productContext;

  const { id, name, description, price, file_path } = product;

  const [show, setShow] = React.useState(false);

  return (
    <Fragment>
      <div>
        <Card style={{ width: "18rem" }} className='text-center'>
          <Card.Img
            variant='top'
            src={"https://laravel-product-api.herokuapp.com/" + file_path}
            img
            alt={product.description}
            style={{ width: "100%", height: "20%" }}
          />
          <Card.Body>
            <Card.Title>
              <strong>{name} </strong>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Text>
            <strong>Price: $</strong>
            {price}
          </Card.Text>
          <Card.Body>
            <Card.Link href='#'>
              <Button
                variant='info'
                className='mx-2 btn-sm'
                onClick={() => setShow(true)}
              >
                <FaInfoCircle className='text-white' />
              </Button>
              <Button variant='dark' className='mx-2 btn-sm'>
                <Link
                  to={"/products/update/" + id}
                  onClick={() => setCurrent(product)}
                >
                  <FiEdit className='text-white' />{" "}
                </Link>
              </Button>
              <Button
                variant='danger'
                className='mx-2 btn-sm'
                onClick={() => deleteProduct(id)}
              >
                <FaTrash />
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>

      <ProductItemDetails
        show={show}
        onHide={() => setShow(false)}
        product={product}
      />
    </Fragment>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
