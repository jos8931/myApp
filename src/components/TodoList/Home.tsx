import { useState } from "react";

type Todo = {
    id: Date;
    text: string;
    checked:boolean;
};

export default function Home(){
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>("");

    const addTodo = () : void => {
        if(input === "")return;
        const todo_item : Todo = {
            id: new Date(),
            text : input,
            checked: false,
        };
        setTodos([...todos,todo_item]);
        setInput("");
    };

    const deleteTodo = (id:Date):void =>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    };
    return(
        <div>
            <h1>오늘 할 일이 없다 잠이나 자야겠다...</h1>
            <input type="text" value={input} onChange={handleInputChange} placeholder="적고 싶은 것을 적으세요 이루어질 확률은 없지만...."/>
            <button onClick={addTodo}>추가</button>

            {todos.map((todo)=>(
                <div key={todo.id.toString()} className="todo-item">
                    <span>{todo.text}</span>
                    <button onClick={()=>deleteTodo(todo.id)}>삭제</button>
                </div>
            ))}
        </div>
    )
}