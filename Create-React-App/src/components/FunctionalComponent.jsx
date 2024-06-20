import React, { useState,useEffect } from 'react'

function Functional(props) {
    const [counter, setCounter]= useState(0);
    useEffect(()=>{
        console.log("useEffect called");
    },[])
    function count(){
        setCounter((counter) => counter+1)

    }
    function decreaseCount(){
        setCounter((counter) => counter > 0 ? counter - 1 : 0)
    }
 return (
    <div>
        <h1>This is a Functional Component </h1>
        <h2>My name is {props.name}</h2>
        <h2>I worked on project {counter} times</h2>
        <button onClick={()=>count()}>Increase Count!</button>
        <button onClick={()=>decreaseCount()}>Decrease Count!</button>
    </div>
 )
}
export default Functional