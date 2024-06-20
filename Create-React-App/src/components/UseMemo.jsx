import React,{useState,useMemo} from "react";

function Memo(){
    const [add, setadd] = useState(0);
    const [subtract, setsubtract] = useState(100);
    const multiply= useMemo(function Multiplication(){
        console.log("useMemo called");
        return add*100
    },[add])
    function addElement(){
        setadd(add+1)
    }
    function subtractElement(){
        setsubtract(subtract-1)
    }

    return (
        <>
        <h1>Example of useMemo Hook</h1>
        <h2>Muliplication: {multiply}</h2> 
        <button onClick={()=>addElement()}>Increase Count!</button>
        <span>{add}</span>
        <button onClick={()=>subtractElement()}>Decrease Count!</button>
        <span>{subtract}</span>

        </>
    )
}
export default Memo