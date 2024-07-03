import { useState } from "react";
import './Profile.css'

export default function Form(){
    const[name, setName] = useState('Mamun');
    const[age, setAge] = useState(24);

    function handleClickIncrementAge(){
        setAge(age + 1);
    }

    function handleChangeName(event){
        setName(event.target.value);
    }

    return(
        <>
            <input type="text" value={name} onChange={event => setName(event.target.value)}/> <br />
            <button className="btn-primary" onClick={()=> setAge(age+1)}>Increment Age</button>
            <p>Hello, {name}. You are {age}</p>
        </>
    )
}