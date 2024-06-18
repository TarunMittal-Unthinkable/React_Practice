import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Functional from './components/FunctionalComponent.jsx'
import Greet from './components/ClassComponents.jsx'
import Lifecycle from './components/LifeCycle.jsx'
import Keys from './components/ListAndKeys.jsx'
import {ConditionalRenderingUsingIf, ConditionalRenderingUsingTernary, ConditionalRenderingUsingAnd } 
from './components/conditionalRendring.jsx'
import Header from './components/styleComponent.jsx'
import TwoWayDataBinding from './components/TwoWayDataBinding.jsx'
import UseRefComponent from './components/UseRefComponent.jsx'
import TimerChallenge from './components/TimeChallenge.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
  <Functional name="Tarun"/>
  <Greet work="Making"/>
  <Lifecycle/>
    <Keys/>
    <ConditionalRenderingUsingIf/>
    <ConditionalRenderingUsingTernary/>
    <ConditionalRenderingUsingAnd/>
    <TwoWayDataBinding initialName="Player 1" symbol="X" />
    <TwoWayDataBinding initialName="Player 2" symbol="O" />
    <UseRefComponent/>
    <TimerChallenge title="Easy" targetTime={1} />
    <TimerChallenge title="Not easy" targetTime={5} />
    </>

  )
}

export default App
