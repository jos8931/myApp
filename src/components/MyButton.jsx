import React,{useState} from "react";

export default function MyButton(){
    const [btnStr, setBtnStr] =useState('클릭');
    const [isChecked,setIsChecked] = useState(false);
    
    function handleClick(event){
        console.log(event);
        setBtnStr(btnStr+"*");
    }

    const handleCheckboxchange = (event) => {
        console.log(event.target.checked);
        setIsChecked(!isChecked);
    };

    return(
        <div>
            <button onClick={handleClick}>
                {btnStr}
            </button>
            <input type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxchange}/>
        </div>
    );
}