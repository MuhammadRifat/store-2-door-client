import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false);
            })
    }, [])
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6} className="search-box">
                    <Form.Control type="text" placeholder="Search Items" />
                    <button>Search</button>
                </Col>
            </Row>
            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            <Row className="mt-4">
                {
                    products?.map(pd => <Product product={pd}></Product>)
                }
            </Row>
        </Container>
    );
};

export default Home;