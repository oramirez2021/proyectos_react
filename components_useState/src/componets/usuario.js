const picStyle = {
  boder: "10px solid red",
  marginBottom: "10px",
  fontWeight: "bold"
};
const Usuario = (props) => {
  return <div>{props.username}</div>;
};
const Usuario2 = (props) => {
  return (
    <div>
      <span>
        {props.nombreUsuario}
        {props.nomUsu}
      </span>
      <div>{props.nombrecito}</div>
    </div>
  );
};
const Foto = (props) => {
  const imagePath = `https://via.placeholder.com/150/0000FF/808080?text=${props.username}`;
  return <img src={props.picture} alt={props.username} width={"190"} height={"190"}/>;
};
const Usuario3 = (props) => {
  return (
    <div style={picStyle}>
      <Foto username={props.username} picture ={props.picture} alt={props.username}/>
      <Usuario2 nombreUsuario={props.nombreUsuario} />
    </div>
  );
};
export default Usuario3;
