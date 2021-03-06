import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ProductRow from '../ProductRow/ProductRow';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);

    // Load all products for manage
    useEffect(() => {
        setSpinner(true);
        fetch('https://pumpkin-pudding-55877.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false);
            })
    }, [])

    // For deleting product by id
    const handleDelete = (id) => {
        const newProducts = products.filter(product => product._id != id);
        setProducts(newProducts);

        fetch(`https://pumpkin-pudding-55877.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res){
                // alert("product deleted successfully");
            }
        })
    }

    const history = useHistory();
    const handleEdit = (id) => {
        history.push(`/admin/edit-product/${id}`);
    }
    return (
        <Container>
            <h2>Manage Product</h2><hr/>
            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            <Table responsive="md" className="bg-white border">
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
                        products?.map(pd => <ProductRow product={pd} handleDelete={handleDelete} handleEdit={handleEdit} key={pd._id}></ProductRow>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageProduct;