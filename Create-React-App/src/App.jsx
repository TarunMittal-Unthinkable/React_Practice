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
import Context from './components/contextApi/Context.jsx';
import Memo from './components/UseMemo.jsx';
import UseCallback from './components/UseCallback.jsx';
import UseStateWithObjectAndArray from './components/UseStateWithObjectAndArray.jsx';
import UseReducer from './components/UseReducer.jsx';
import LiftingStateUp from './components/LiftingStateUp.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import ButtonHover from './components/HOC/ButtonHover.jsx';
import ButtonClick from './components/HOC/ButtonClick.jsx';
import Login from './components/StateLogin.jsx';

function App() {
  
  return (
    <>
    <Header/>
  <Functional name="Tarun"/>
  <ErrorBoundary>
  <Greet work="Making"/>
  </ErrorBoundary>
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
    <Context/>
    <Memo/>
    <UseCallback/>
    <UseStateWithObjectAndArray/>
    <UseReducer/>
    <LiftingStateUp getData={(name)=>{console.log(name)}}/>
      <ButtonClick />
      <ButtonHover />
      <Login/>
    </>

  )
}

export default App
