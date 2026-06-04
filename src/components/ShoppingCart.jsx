import React, { useState } from 'react';
import CartList from '../components/CartList';
import CartSummary from '../components/CartSummary';
const initialCartData = [
    { id: 1, name: '기계식 키보드', price: 120000, quantity: 1 },
    { id: 2, name: '무선 마우스', price: 85000, quantity: 2 },
    { id: 3, name: 'QHD 모니터', price: 350000, quantity: 1 }
];
export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState(initialCartData);
    const handleIncrease = (id) => {

    };
    const handleDecrease = (id) => {

    };
    const handleRemove = (id) => {

    };
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>장바구니</h2>
            <CartList
                items={cartItems}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
            />
            <CartSummary
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
            />
        </div>
    );
}