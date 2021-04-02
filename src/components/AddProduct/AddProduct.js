import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [spinner, setSpinner] = useState(false);

    const onSubmit = data => {
        setSpinner(true);
        const productData = {
            pName: data.pName,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };

        // add product in database
        fetch(`https://pumpkin-pudding-55877.herokuapp.com/addProduct`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                if (res) {
                    setSpinner(false);
                    alert("Product added Successfully!");
                }
                setSpinner(false);
            })
    };

    // For uploading product image in imgbb website
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c4ebb744a3b647feb62c85c668dcb1fa');
        imageData.append('image', event.target.files[0]);

        // upload image and generate a unique image url
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

            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            <div className="product-form bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <b>Product Name:</b><br />
                            <input name="pName" defaultValue="" ref={register} placeholder="Enter product name" required/>
                        </Col>
                        <Col md={6}>
                            <b>Weight:</b><br />
                            <input name="weight" defaultValue="" ref={register} placeholder="Enter weight" required/>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <b>Price:</b><br />
                            <input name="price" defaultValue="" ref={register} placeholder="Enter price" required/>
                        </Col>
                        <Col md={6}>
                            <b>Add Photo:</b><br />
                            <input name="product-image" type="file" onChange={handleImageUpload} ref={register} required/>
                        </Col>
                    </Row>
                    <div className="text-center"><button id="product-save-btn" type="submit">Save</button></div>
                </form>
            </div>
        </Container>
    );
};

export default AddProduct;