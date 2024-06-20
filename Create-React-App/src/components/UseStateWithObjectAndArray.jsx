import React, { useState,useEffect } from 'react'

function UseStateWithObjectAndArray(props) {
    const [allvalues, setallvalues]= useState({firstname:"Tarun",lastname:"Mittal"});
    const [items, setitems]= useState([]);

    function update(){
        setallvalues({...allvalues,firstname:"Avrun"})

    }
    function updateArray(){
        setitems([...items,{id:items.length, value:Math.random()}])
    }
 return (
    <div>
        <h1>useState with Object and Array </h1>
        <h2>My first name is {allvalues.firstname} and last name is {allvalues.lastname}</h2>
        <ol>
            {items.map(item=>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ol>
        <button onClick={()=>update()}>Update Name</button>
        <button onClick={()=>updateArray()}>Update Array</button>
    </div>
 )
}
export default UseStateWithObjectAndArray