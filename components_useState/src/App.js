import "./styles.css";
import Usuario from "./componets/usuario";
import Usuario2 from "./componets/usuario";
import Usuario3 from "./componets/usuario";
import {useState} from "react";
const source = "https://www.breakingbadapi.com/api/characters";

export default function App() {
  const listaUsuarios = ["omar", "renzo", "sergio"];
  const [lista, setLista] = useState([]);
  //let lista = [];
  const characters = fetch(source)
    .then((response) => {
      if (response.status === 200) {
        console.log("everything is going good");
        response.json().then((data) => {
          console.log(data);
          const newLista = data.map(character => {
            return {character.name;
              character.picture;
          });
          setLista(newLista);
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

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Usuario username={"omar"} />
      <Usuario2 nombreUsuario={"camila"} nomUsu={"renzo"} />
      <Usuario2 nombrecito={"camila"} />
      <Usuario3 username={"Jonathan"} nombreUsuario={"Kratos"} />
      {listaUsuarios.join("-")};
      {lista.map((usuario) => {
        return (
          <div>
            <Usuario username={usuario} />
          </div>
        );
      })}
      ;
    </div>
  );
}
