import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    document.body.style.backgroundColor = 'rgb(241, 239, 239)';

    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [searchText, setSearchText] = useState({});

    // Load all products from database
    useEffect(() => {
        setSpinner(true);
        fetch('https://pumpkin-pudding-55877.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false);
            })
    }, [])

    // For getting searching results
    const handleSearchBtn = () => {
        setSpinner(true);
        if(searchText){
            fetch(`https://pumpkin-pudding-55877.herokuapp.com/searchProducts/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false);
            })
        }
        else{
            setSpinner(false);
        }
        
    }
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6} className="search-box">
                    <Form.Control onBlur={(event) => setSearchText(event.target.value)} type="text" placeholder="Search Items" />
                    <button onClick={handleSearchBtn}>Search</button>
                </Col>
            </Row>
            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            <Row className="mt-4">
                {
                    products?.map(pd => <Product product={pd} key={pd._id}></Product>)
                }
            </Row>
        </Container>
    );
};

export default Home;