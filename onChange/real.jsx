import React, {useState} from 'react';
export default function Real() {
const [name,setName]=useState("");
function handleChange(event){
    setName(event.target.value);
}
return(
    <div>
        <p>name:{name}</p>
        <input value={name} onChange={handleChange} />
    </div>
)
}