import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { userContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { productId } = useParams();
    const [cartProduct, setCartProduct] = useState({});
    const {pName, price, weight} = cartProduct;
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setCartProduct(data))
    }, [productId])

    const history = useHistory();
    const handleCheckout = () => {
        const customerDetails = {...loggedInUser, product: cartProduct};
        setLoggedInUser(customerDetails);
        history.push("/shipment");
    }
    return (
        <Container>
            <h2 className="mt-3">Checkout</h2><hr/>

            <Table responsive="md" className="mt-3 border bg-white">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pName}- {weight}</td>
                        <td>1</td>
                        <td>${price}</td>
                    </tr>
                    <tr>
                        <th colSpan="2">Total</th>
                        <th>${price}</th>
                    </tr>
                </tbody>
            </Table>
            <hr/>
            <div className="text-center"><button className="btn btn-success" onClick={handleCheckout}>Checkout</button></div>
        </Container>
    );
};

export default CheckOut;