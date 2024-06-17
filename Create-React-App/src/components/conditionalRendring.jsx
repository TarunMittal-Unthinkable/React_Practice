import React from 'react'

function ConditionalRenderingUsingIf() {
    const isLoggedIn=true;
    if(isLoggedIn){
        return(
            <>
            <h1>Conditonal Rendring Example Using If condition</h1>
            <h2>Welcome, you are Logged In</h2>
            </>
        )
    }
    else{
        return(
            <h1>Not Logged In</h1>
        )
    }
}

function ConditionalRenderingUsingTernary() {
    const isLoggedIn=false;
    return (
        <>
          {isLoggedIn ? <>
            <h1>Conditonal Rendring Example Using Ternay condition</h1>
            <h2>Welcome back!</h2>
            </> : <>
            <h1>Conditonal Rendring Example Using Ternay condition</h1>
            <h2>Please log in.</h2>
            </>
            }           
            
            </>
    )
}

function ConditionalRenderingUsingAnd() {
    const isLoggedIn=true;
    return (
        
        <div>
          {isLoggedIn && <>
            <h1>Conditonal Rendring Example Using AND condition</h1>
            <h2>Welcome back!</h2>
            </>}
        </div>
    )
}


export {ConditionalRenderingUsingIf, ConditionalRenderingUsingTernary, ConditionalRenderingUsingAnd }