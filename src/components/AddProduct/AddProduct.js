import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Form, Row } from 'react-bootstrap';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            pName: data.pName,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };

        fetch(`http://localhost:5000/addProduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                if (res) {
                    alert("Product added Successfully!");
                }
            })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c4ebb744a3b647feb62c85c668dcb1fa');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <Container>
            <h2>Add Product</h2><hr />

            <div className="product-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <b>Product Name:</b><br />
                            <input name="pName" defaultValue="" ref={register} required/>
                        </Col>
                        <Col md={6}>
                            <b>Weight:</b><br />
                            <input name="weight" defaultValue="" ref={register} required/>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <b>Price:</b><br />
                            <input name="price" defaultValue="" ref={register} required/>
                        </Col>
                        <Col md={6}>
                            <b>Add Photo:</b><br />
                            <input name="product-image" type="file" onChange={handleImageUpload} ref={register} required/>
                        </Col>
                    </Row>
                    <button id="product-save-btn" type="submit">Save</button>
                </form>
            </div>
        </Container>
    );
};

export default AddProduct;