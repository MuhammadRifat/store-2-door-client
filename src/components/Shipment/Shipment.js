import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { userContext } from '../../App';
import { useHistory } from 'react-router';

const Shipment = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [spinner, setSpinner] = useState(false);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const customerData = {
            name: data.name,
            email: data.email,
            address: data.address,
            mobile: data.mobile
        };
        const customerDetails = { ...loggedInUser, shipment: customerData, orderTime: new Date() };
        setSpinner(true);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerDetails)
        })
            .then(res => {
                if (res) {
                    setSpinner(false);
                    history.push("/orders");
                }
            })
    };

    return (
        <Container>
            <h2>Please, Fill up this form</h2><hr />

            <div className="product-form">
                {
                    spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <b>Name:</b><br />
                            <input name="name" defaultValue={loggedInUser.name} ref={register} placeholder="Enter your name" required />
                        </Col>
                        <Col md={6}>
                            <b>Email:</b><br />
                            <input name="email" defaultValue={loggedInUser.email} ref={register} placeholder="Enter email" required />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <b>Address:</b><br />
                            <input name="address" ref={register} placeholder="Enter address" required />
                        </Col>
                        <Col md={6}>
                            <b>Mobile number:</b><br />
                            <input name="mobile" ref={register} placeholder="Enter mobile number" required />
                        </Col>
                    </Row>
                    <div className="text-center mt-3"><button id="product-save-btn" type="submit">Place Order</button></div>
                </form>
            </div>
        </Container>
    );
};

export default Shipment;