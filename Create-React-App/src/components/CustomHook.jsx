import React, { useState } from 'react'

function CustomHook(initialvalue=0) {
    const [counter, setCounter]= useState(initialvalue);

    function increaseCount(){
        setCounter((counter) => counter+1)

    }
    function decreaseCount(){
        setCounter((counter) => counter > 0 ? counter - 1 : 0)
    }
 return [counter, increaseCount,decreaseCount]
}
export default CustomHook