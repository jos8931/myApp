import React,{useState} from "react";

export default function CartSummary() {

    const [totalQuantity, settotalQuantity] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);
    return(
        <div>
            <h1>결제 예정 정보</h1>
            <h2>{totalQuantity}</h2>
            <h2>{totalPrice}</h2>
        </div>
    );
}