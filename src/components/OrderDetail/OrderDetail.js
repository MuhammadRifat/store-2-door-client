import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './OrderDetail.css';

const OrderDetail = ({order}) => {
    console.log(order);
    const {product, shipment, orderTime} = order;
    return (
        <Row className="mb-3">
            <Col>
                <Row style={{border:'1px solid lightgray',borderRadius:'5px'}}>
                    <Col>
                        <img style={{width:'100px', height:'100px'}} src={product.imageURL} alt=""/>
                    </Col>
                    <Col>
                        <h5 className="mt-4">{product.pName}- {product.weight}</h5>
                    </Col>
                    <Col>
                        <h6 className="mt-4">${product.price}</h6>
                    </Col>
                    <Col>
                        <h6 className="mt-4">quantity: 1</h6>
                        <small className="mt-4">Ordered: {new Date(orderTime).toDateString('dd/mm/yy')}</small>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default OrderDetail;