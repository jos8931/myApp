import React, { useState } from "react";

export default function Test(){
    let str: string = "hello";

    let a : number = 123;

    function add(x:number, y:number):number{
        return x+y;
    }
    const add2 = (x:number, y:number):number => {
        return x+y;
    }
    let obj : {a:number,b:string} = {
        a: 1, b:"test"
    }

    let arr1:string[] = ['a','b','c'];
    let arr2: number[] =[1,2,3];
    let arr3: [number,number,string] = [12,134,"ss"];

    const x:Number = 5;
    const f:true = true;
    type AddType = (a:number,b:number) => Number;
    const add3:Operation = (a,b) => a+b;

    type Operation =(a:number,b:number) =>number;
    const sub2:Operation = (a,b) => a-b;
    const multiful:AddType = (a,b) => a*b;

    interface Person{
        name:string, age:number;
    }
    const person:Person = {
        name :"이정환", age:27
    }

    function func<t>(value:t):t{
        return value;
    }

    function MyButton({id,title}:{id:number,title:string}){
        return (
            <div>
                <button>{id} {title}</button>
            </div>
        )
    }

    const [count, setCount] = useState<number>(0);
    type Status = "idle"|"loading"|"success"|"err";
    const [status, setStatus] = useState<Status>("idle");

    const [value, setValue] = useState("Init string");

    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        setValue(event.currentTarget.value);
    }
    function handleClick(event:React.MouseEvent<HTMLElement>){
        alert("click");
    }


    return(
        <div>
            <input value={value} onChange={handleChange}/>
            <p>value : {value}</p>
            <button onClick={handleClick}>click</button>

        </div>
    )
}