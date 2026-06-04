import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from "react";
export default function Test() {
    let str = "hello";
    let a = 123;
    function add(x, y) {
        return x + y;
    }
    const add2 = (x, y) => {
        return x + y;
    };
    let obj = {
        a: 1, b: "test"
    };
    let arr1 = ['a', 'b', 'c'];
    let arr2 = [1, 2, 3];
    let arr3 = [12, 134, "ss"];
    const x = 5;
    const f = true;
    const add3 = (a, b) => a + b;
    const sub2 = (a, b) => a - b;
    const multiful = (a, b) => a * b;
    const person = {
        name: "이정환", age: 27
    };
    function func(value) {
        return value;
    }
    function MyButton({ id, title }) {
        return (_jsx("div", { children: _jsxs("button", { children: [id, " ", title] }) }));
    }
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("idle");
    const [value, setValue] = useState("Init string");
    function handleChange(event) {
        setValue(event.currentTarget.value);
    }
    function handleClick(event) {
        alert("click");
    }
    return (_jsxs("div", { children: [_jsx("input", { value: value, onChange: handleChange }), _jsxs("p", { children: ["value : ", value] }), _jsx("button", { onClick: handleClick, children: "click" })] }));
}
//# sourceMappingURL=Test.js.map