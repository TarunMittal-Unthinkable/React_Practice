import React,{ useState } from 'react';

function LiftingStateUp(props) {
  const [playerName, setPlayerName] = useState();

  function handlSubmit(e){
    e.preventDefault();
    props.getData(playerName)

  }

  return <>
    <h1>Lifting state up Example</h1>
     <form onSubmit={handlSubmit}>
     <input type="text" required value={playerName} onChange={(e)=>{setPlayerName(e.target.value)}
     } />
      <button>Submit</button>
      </form>
      </>
  
}

export default LiftingStateUp