import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function Button(props){
  
  const handlerControl = ()=>props.onClickFunction(props.increment)
  return <button onClick={handlerControl} >+{props.increment}</button>
}
function Display(props){
  return(
    <div>
      {props.message}
    </div>
  )
}
function App(){
  const [counter,setCounter] = useState(0)
  const incrementCounter = (incrementalValue)=>{setCounter(counter+incrementalValue)}
  return(
   <div>
    <Button onClickFunction={incrementCounter}  increment={1}/>
    <Button onClickFunction={incrementCounter} increment={5}/>
    <Button onClickFunction={incrementCounter} increment={10}/>
    <Button onClickFunction={incrementCounter} increment={100}/>
    <Button onClickFunction={incrementCounter} increment={200}/>
    <Display message = {counter}/>
  </div>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
