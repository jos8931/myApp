import React,{useState} from "react";

export default function NameForm(props){
    const [gender, setGender] = useState("남자");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }
    const handleChangeName = (event) => {
        setName(event.target.value.toUpperCase());
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleSubmit = (event) => {
        alert(`입력한 이름: ${value},입력한 성별 ${gender}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <br/>
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br/>
            <label>
                이메일:
                <input type="email" value={email} onChange={handleChangeEmail}/>
            </label>
            <br/>
            <label>
                비밀번호:
                <input type="password" value={email} onChange={handleChangeEmail}/>
            </label>
            <br/>
            <button type="submit">제출</button>
        </form>
    )
}