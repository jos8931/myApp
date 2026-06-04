import React, { useState } from "react";

export default function CartList() {
    const [items, setItems] = useState({});

    const handleIncrease = () => setCount((items) => items+1);
    const handleDecrease = () => setCount((cartItem) => cartItem-1);


    return [handleIncrease, handleDecrease];
}