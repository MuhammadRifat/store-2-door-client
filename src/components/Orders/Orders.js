import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { userContext } from '../../App';
import OrderDetail from '../OrderDetail/OrderDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(() => {
        const email = loggedInUser.email;
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrdersData(data))
    }, [loggedInUser.email])
    
    const totalItems = ordersData.length;
    const subTotal = ordersData.reduce( (sum, order) => sum + Number(order.product.price), 0);
    const shippingFee = subTotal * .05;
    const total = subTotal + shippingFee;
    return (
        <Container>
            <h3 className="mt-3">Your Orders Item</h3><hr/>
            <Row className="mt-3">
                <Col md={8}>
                    {
                        !ordersData.length && <h6 className="text-danger text-center mt-4">There is no orders item.</h6>
                    }
                    {
                        ordersData?.map(order => <OrderDetail order={order} key={order._id}></OrderDetail>)
                    }
                </Col>
                <Col md={4}>
                    <div className="bg-white" style={{border:'1px solid lightgray', borderRadius:'5px', padding:'10px'}}>
                        <h5>Billing</h5><hr/>
                        <p>
                            <FontAwesomeIcon icon={faUser} /> <b>{loggedInUser.name}</b>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} /> {loggedInUser.email}
                        </p>
                        <h5>Order Summary</h5><hr/>
                        <table style={{width:'100%'}}>
                            <tr>
                                <td>Total Items</td>
                                <td>{totalItems}</td>
                            </tr>
                            <tr>
                                <td>Subtotal</td>
                                <td>${subTotal}</td>
                            </tr>
                            <tr>
                                <td>Shipping Fee</td>
                                <td>${shippingFee}</td>
                            </tr>
                            <tr>
                                <td colSpan="2"><hr/></td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <th>${total}</th>
                            </tr>
                        </table>
                        <button className="btn btn-success w-100 mt-3">Proceed to Pay</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;