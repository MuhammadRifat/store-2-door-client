import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { pName, weight, price, imageURL } = product;
    const history = useHistory();
    const handleBuyNow = (product) => {
        history.push(`/checkout/${product._id}`);
    }
    return (
        <Col lg={3}>
            <div className="product bg-white">
                <img src={imageURL} alt="" />
                <h6>{pName}- {weight}</h6>
                <div className="product-footer">
                    <h4>${price}</h4>
                    <button className="ml-auto buy-now-btn" onClick={() => handleBuyNow(product)}>Buy Now</button>
                </div>
            </div>
        </Col>
    );
};

export default Product;