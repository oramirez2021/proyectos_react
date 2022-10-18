import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function Button(props){
  const handlerControlInc = ()=>props.onClickFunctionInc()
  const handlerControlDec = ()=>props.onClickFunctionDec()
  return (
    <div>
      
      <button onClick= {handlerControlInc} >Increment</button>
      <button onClick={handlerControlDec}>Decrement</button>
    </div>
    
  )
}
function Display(props){
  return(
  <h2>Counter: {props.message}</h2>
  )
}

function App(){
  const [counter,setCounter] = useState(0)
  const incrementation = ()=> setCounter(counter+1)
  const decrementation = ()=> setCounter(counter-1)
  return(
    <div>
      <Display message = {counter}/>
      <Button onClickFunctionInc = {incrementation} onClickFunctionDec = {decrementation}/>
    </div>
  )
 
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
