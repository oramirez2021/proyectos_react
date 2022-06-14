import React from "react";

const textStyle = {
    border:"5px solid green",
    marginBottom:"10px",
    fontWeight:"bold"
};
const Persona = (props) => {
    return <div style={textStyle}>{props.perName}</div>;
    
};
class NombreC extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:props.perName
        };
    }
    render(){
        return <div>{this.props.perName}</div>
    }
}
const Foto = (props)=>{
    //const source = `https://via.placeholder.com/150/0000FF/808080?text=${props.text}`;
    return <div>
        <img src={props.source} width={"190"} height={"190"} alt={props.actorname}></img>
    </div>;
}
const Objeto = (props)=>{
    return(<div>
        <NombreC perName={props.perName}/>
        <Foto source={props.source} actorname={props.perName}></Foto>
    </div>);
   
}



export default Objeto;