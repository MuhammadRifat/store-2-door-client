import React from 'react';

const ProductRow = ({ product }) => {
    const { pName, weight, price } = product;
    return (
        <tr>
            <td>{pName}</td>
            <td>{weight}</td>
            <td>${price}</td>
            <td><button>Edit</button><button>Delete</button></td>
        </tr>
    );
};

export default ProductRow;