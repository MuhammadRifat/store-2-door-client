import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './OrderDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faClock, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const OrderDetail = ({order, handleRemoveBtn}) => {
    const {_id, product, shipment, orderTime} = order;
    return (
        <Row className="mb-3">
            <Col>
                <Row className="bg-white" style={{border:'1px solid lightgray',borderRadius:'5px'}}>
                    <Col>
                        <img style={{width:'100px', height:'100px'}} src={product.imageURL} alt=""/>
                    </Col>
                    <Col>
                        <h5 className="mt-4 text-success">{product.pName}- {product.weight}</h5>
                    </Col>
                    <Col>
                        <h6 className="mt-4 text-success">${product.price}</h6>
                        <span>quantity: 1</span><br/>
                        <button className="delete-btn mt-2" onClick={() => handleRemoveBtn(_id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </Col>
                    <Col>
                        <small><FontAwesomeIcon icon={faClock} /> Ordered: {new Date(orderTime).toDateString('dd/mm/yy')}</small><br/>
                        <small><FontAwesomeIcon icon={faMapMarkerAlt} /> {shipment.address}</small><br/>
                        <small><FontAwesomeIcon icon={faPhoneAlt} /> {shipment.mobile}</small>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default OrderDetail;