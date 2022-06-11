import "./styles.css";
/*import Usuario from "./componets/usuario";
import Usuario2 from "./componets/usuario";
import Usuario3 from "./componets/usuario";
import {useState} from "react";
*/

import Objeto from "./componets/persona";


export default function App() {
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
  return (
    <div className="App">
      <Objeto perName = {"OMAR"} text="Omar Ramirez Vargas"/>
    </div>
  );
  
 
}
