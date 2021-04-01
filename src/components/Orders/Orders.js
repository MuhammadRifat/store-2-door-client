import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { userContext } from '../../App';
import OrderDetail from '../OrderDetail/OrderDetail';

const Orders = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(() => {
        const email = loggedInUser.email;
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrdersData(data))
    }, [])
    console.log(ordersData);
    return (
        <Container>
            <Row className="mt-5">
                <Col md={8}>
                    {
                        ordersData?.map(order => <OrderDetail order={order} key={order._id}></OrderDetail>)
                    }
                </Col>
                <Col md={4}>
                    <div style={{border:'1px solid lightgray', borderRadius:'5px', padding:'10px'}}>
                        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi? Nihil impedit error assumenda suscipit tempore reiciendis sunt inventore aspernatur quasi dolorum nemo voluptatibus corrupti iste dolore possimus, veniam nam!
                        Optio inventore libero mollitia. Ratione, quidem expedita! Temporibus unde magnam doloribus voluptas doloremque dolor repudiandae nesciunt. Quasi dolores molestias dolorum, possimus vero expedita veritatis quam beatae eveniet, doloribus neque earum.</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Orders;