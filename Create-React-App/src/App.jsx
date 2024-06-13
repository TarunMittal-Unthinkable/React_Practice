import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Functional from './components/FunctionalComponent.jsx'
import Greet from './components/ClassComponents.jsx'
import Lifecycle from './components/LifeCycle.jsx'
import Keys from './components/ListAndKeys.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
  <Functional name="Tarun"/>
  <Greet work="Making"/>
  <Lifecycle/>
    <Keys/>
    </React.Fragment>

  )
}

export default App
