import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ProductRow from '../ProductRow/ProductRow';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <Container>
            <h2>Manage Product</h2><hr/>
            <Table striped responsive="md">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(pd => <ProductRow product={pd} key={pd._id}></ProductRow>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageProduct;