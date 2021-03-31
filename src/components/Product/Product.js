import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {pName, weight, price, imageURL} = product;
    const history = useHistory();
    const handleBuyNow = () => {
        history.push("/checkout");
    }
    return (
        <Col lg={3}>
            <div className="product">
                <img src={imageURL} alt=""/>
                <h5>{pName}- {weight}</h5>
                <div className="product-footer">
                    <h4>${price}</h4>
                    <button className="ml-auto buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </Col>
    );
};

export default Product;