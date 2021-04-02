import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

const EditProduct = () => {
    const { register, handleSubmit } = useForm();
    const [product, setProduct] = useState({});
    const [spinner, setSpinner] = useState(false);
    const {id} = useParams();

    // Get product from database when user want to edit product
    useEffect(() => {
        fetch(`https://pumpkin-pudding-55877.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    // Form data after editing
    const onSubmit = data => {
        setSpinner(true);
        const productData = {
            pName: data.pName,
            weight: data.weight,
            price: data.price
        };
        
        // Update editing product
        fetch(`https://pumpkin-pudding-55877.herokuapp.com/updateProduct/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
        })
        .then(res => {
            if(res){
                setSpinner(false);
                alert("Product Updated Successfully!");
            }
            setSpinner(false);
        })
    };
    return (
        <Container>
            <h2>Edit Product</h2><hr />

            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            <div className="product-form bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <b>Product Name:</b><br />
                            <input name="pName" defaultValue={product.pName} ref={register} placeholder="Enter product name" required/>
                        </Col>
                        <Col md={6}>
                            <b>Weight:</b><br />
                            <input name="weight" defaultValue={product.weight} ref={register} placeholder="Enter weight" required/>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <b>Price:</b><br />
                            <input name="price" defaultValue={product.price} ref={register} placeholder="Enter price" required/>
                        </Col>
                    </Row>
                    <div className="text-center"><button id="product-save-btn" type="submit">Save</button></div>
                </form>
            </div>
        </Container>
    );
};

export default EditProduct;