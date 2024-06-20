import React, { createContext } from 'react';
import First from '../contextApi/First.jsx';
//import Third from '../contextApi/Third.jsx';

const FirstName = createContext();
const LastName = createContext();


const Context = () => {
  return (
    <>
      <FirstName.Provider value={"Tarun"} >
      <LastName.Provider value={"Prankit"}>
        <First />
      </LastName.Provider>  
      </FirstName.Provider>
      
    </>
  );
};

export default Context;
export {FirstName, LastName};