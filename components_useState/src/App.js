import "./styles.css";
import Objeto from "./componets/persona";
import {useState, useEffect} from "react";

export default function App() {
  const names = ["omar","renzo","sergio","michelle", "ivonne","raul"];
  const source = "https://www.breakingbadapi.com/api/characters";
  const [castingList, setCastingList] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    console.debug("fist load of the user list");
    fetch(source).then((response)=>{
      if(response.status === 200){
        response.json().then((datos)=>{
          console.log("Received the user list");
          const newListaActores= datos.map((actor)=>{
            return{nombre:actor.name,
            imagen:actor.img}
          })
          setCastingList(newListaActores);
          console.log(castingList);
        })
      }
    })
  },[]);
  useEffect(()=>{
    console.debug("use list loaded");
  },[castingList]);
 
/*const array = ["omar","renzo","sergio","michelle"];
array.map((nombre)=>{
  console.log(nombre);
})*/

console.log("castingList has data");
return (
<div className="App">
    <div>Total:{counter}<p>
      <button onClick={(event)=>{setCounter(counter+1)}}>Add 1</button>
      </p>
    </div>
    {castingList.map((act)=>(
      <Objeto perName = {act.nombre} source = {act.imagen} />

    ))}
</div>
)


//return <Objeto perName = {"OMAR"} text = {"JONA"} src = {source} />

}
