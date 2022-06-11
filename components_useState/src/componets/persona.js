const textStyle = {
    border:"5px solid green",
    marginBottom:"10px",
    fontWeight:"bold"
};
const Persona = (props) => {
    return <div style={textStyle}>{props.perName}</div>;
    
};
const Foto = (props)=>{
    const source = `https://via.placeholder.com/150/0000FF/808080?text=${props.text}`;
    return <div>
        <img src={source} width={"190"} height={"190"}></img>
    </div>;
}
const Objeto = (props)=>{
    return(<div>
        <Persona perName={props.perName}></Persona>
        <Foto text={props.text} ></Foto>
    </div>);
   
}
export default Objeto;