/* eslint-disable no-unused-vars */
// src/components/CartWidget.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    const itemsCount = 5; 

    return (
        <div className="cart-widget d-flex align-items-center">
            <FaShoppingCart size={24} />
            <span className="badge bg-danger ms-2">{itemsCount}</span>
        </div>
    );
};

export default CartWidget;
