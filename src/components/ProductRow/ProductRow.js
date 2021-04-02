import React from 'react';
import './ProductRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

// This components created for showing product details in Manage-Product page
const ProductRow = ({ product, handleDelete, handleEdit }) => {
    const { _id, pName, weight, price } = product;

    return (
        <tr>
            <td>{pName}</td>
            <td>{weight}</td>
            <td>${price}</td>
            <td><button className="edit-btn" onClick={() => handleEdit(_id)}><FontAwesomeIcon icon={faEdit} /></button> <button className="delete-btn" onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
        </tr>
    );
};

export default ProductRow;