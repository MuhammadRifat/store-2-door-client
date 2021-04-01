import React from 'react';
import './ProductRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const ProductRow = ({ product }) => {
    const { _id, pName, weight, price } = product;

    const handleDelete = (e, id) => {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res){
                e.target.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            }
        })
    }
    return (
        <tr>
            <td>{pName}</td>
            <td>{weight}</td>
            <td>${price}</td>
            <td><button className="edit-btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="delete-btn" onClick={(e) => handleDelete(e, _id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
        </tr>
    );
};

export default ProductRow;