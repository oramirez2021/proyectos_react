import "./styles.css";
/*import Usuario from "./componets/usuario";
import Usuario2 from "./componets/usuario";
import Usuario3 from "./componets/usuario";
import {useState} from "react";
*/
import Objeto from "./componets/persona";
import {useSate, useState} from "react";
export default function App() {
  const names = ["omar","renzo","sergio","michelle", "ivonne","raul"];
  const source = "https://www.breakingbadapi.com/api/characters";
  const [castingList, setCastingList] = useState([]);
  /*
  const listaUsuarios = ["omar", "renzo", "sergio"];
  const [lista, setLista] = useState([]);
  //let lista = [];
  const characters = fetch(source)
    .then((response) => {
      if (response.status === 200) {
        console.log("everything is going good");
        response.json().then((data) => {
          console.log("DATADATADATA");
          console.log(data);
          const newLista = data.map((character) => {
            return {username:character.name,
              picture:character.img
          }});
          setLista(newLista);
          console.log("OMAR");
          console.log(lista);
          
        });
      }
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  if (lista.length === 0) {
    return <div>There is not information yet</div>;
  }
*/
const listaActores = fetch(source).then((response)=>{
  if(response.status === 200){
    response.json().then((datos)=>{
      const newListaActores= datos.map((actor)=>{
        return{nombre:actor.name,
        foto:actor.img}
      })
      setCastingList(listaActores);
      console.log(castingList);
    })
  }
})
const array = ["omar","renzo","sergio","michelle"];
array.map((nombre)=>{
  console.log(nombre);
})
return <Objeto perName = {"OMAR"} text = {"JONA"}  />

}
