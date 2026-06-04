import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function Home() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const addTodo = () => {
        if (input === "")
            return;
        const todo_item = {
            id: new Date(),
            text: input,
            checked: false,
        };
        setTodos([...todos, todo_item]);
        setInput("");
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "\uC624\uB298 \uD560 \uC77C\uC774 \uC5C6\uB2E4 \uC7A0\uC774\uB098 \uC790\uC57C\uACA0\uB2E4..." }), _jsx("input", { type: "text", value: input, onChange: handleInputChange, placeholder: "\uC801\uACE0 \uC2F6\uC740 \uAC83\uC744 \uC801\uC73C\uC138\uC694 \uC774\uB8E8\uC5B4\uC9C8 \uD655\uB960\uC740 \uC5C6\uC9C0\uB9CC...." }), _jsx("button", { onClick: addTodo, children: "\uCD94\uAC00" }), todos.map((todo) => (_jsxs("div", { className: "todo-item", children: [_jsx("span", { children: todo.text }), _jsx("button", { onClick: () => deleteTodo(todo.id), children: "\uC0AD\uC81C" })] }, todo.id.toString())))] }));
}
//# sourceMappingURL=Home.js.map