import React from "react";
import ReactDOM from "react-dom/client";
import logotipo from "./react_logo.png"
import "./style.css"

function MainContent(){
   return(
      <div>
        <h1>This page is about being persistent</h1>
          <ol>
            <li>Don't stop until you get what you needed with the help of God</li>
            <li>Don't stop trying</li>
            <li>Don't sleep till you get something</li>
        </ol>
      </div>
   )
}
function Footer(){
  return(
     <div>
    <img className="imagen" src={logotipo} alt="omar"/>
    <small>	© 2022 Ramirez development. All rights reserved</small>
  </div>
  )
 
}
function Header(){
  return(
      <nav className="nav">
      <ul className="nav-items"><li>Pricing</li><li>About</li><li>Contact</li></ul>
      <MainContent/>
      <Footer/>
    </nav>
  )
}
  
  
  

function DevuelvePagina(){
  return(
    
      <Header/>
    
  )
}

const root1 = ReactDOM.createRoot(document.getElementById("root1"))
root1.render(
<React.StrictMode>
  <DevuelvePagina/>
</React.StrictMode>
)