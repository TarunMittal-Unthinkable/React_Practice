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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Functional name="Tarun"/>
  <Greet work="Making"/>
  <Lifecycle/>
    <Keys/>
    <ConditionalRenderingUsingIf/>
    <ConditionalRenderingUsingTernary/>
    <ConditionalRenderingUsingAnd/>
    </>

  )
}

export default App
