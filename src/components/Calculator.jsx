import React, {useState} from "react";

function componentC({temp, changeTemp}){
    return (
        <div>
            <span>단위(섭씨) : </span>
            <input
                type="number"
                value={temp}
                onChange={(e)=>changeTemp(e.target.value)}
            />
        </div>
    );
}

function componentF({temp, changeTemp}){
    return(
        <div>
            <span>단위(화씨) : </span>
            <input
                type="number"
                value={value}
                onChange={(e)=>changeTemp(e.target.value)}
            />
        </div>
    );
}

export default function Calculator() {
    const [temperature, setTemperature] = useState(0);
    const [type, setType] = useState('c');

    const toFAhrenheit = (ceLsius) => {
        return ((ceLsius*9)/5+32).toFixed(1);
    }
    const toCelsius = (fahrenheit) => {
        return (((fahrenheit-32)*5)/9).toFixed(1);
    }
    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setType('c');
    };
    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setType('f');
    };
    const ceLsius = type == "c"?
    temperature : toCelsius(temperature);
    const fahrenheit = type =="f"?
    temperature : toFAhrenheit(temperature);

    return(
        <div>
            <h2>온도 변환</h2>
            <componentC temp={ceLsius}
                changeTemp={handleCelsiusChange}/>
            <componentF temp={fahrenheit}
                changeTemp={handleFahrenheitChange}/>
        </div>
    );

}