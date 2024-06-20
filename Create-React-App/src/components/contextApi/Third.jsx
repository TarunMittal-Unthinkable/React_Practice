import React, { useContext } from 'react';
import {FirstName, LastName} from '../contextApi/Context.jsx';

// second method, using useContext() method.
const Third = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <h1>
            My name is {fname} {lname}
        </h1>

    );

};



// // First method, using createContext() method.

// const Third = () => {
//     return (
//         <>
//         <FirstName.Consumer>
//         { (fname) => {
//                 return (
//                     <LastName.Consumer>
//                     { (lname) => {
//                         return (
//                         <h1> 
//                             My name is {fname} {lname}
//                         </h1>);
//                     }}
//                     </LastName.Consumer>
//                 );
//             }
 
//         }
//         </FirstName.Consumer>
//         </>);
// };

export default Third;