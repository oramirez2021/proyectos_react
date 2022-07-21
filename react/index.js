ReactDOM.render(<h1>Hola mundo como estan 1</h1>,document.getElementById("root1"));
ReactDOM.render(<h2>hola mundo como estan 2</h2>,document.getElementById("root2"));
ReactDOM.render(<h3><ul><li>UNO</li><li>DOS</li></ul></h3>,document.getElementById("root3"));
//react compose
function ReturnComponent(){
    return(<div>
        <h4>SOY ETIQUETA H4</h4>
        <p>SOY UN PARRAFO</p>
        <ul>
            <li>MENU UNO</li>
            <li>MENU DOS</li>
            <li>MENU TRES</li>
        </ul>
    </div>)
}
ReactDOM.render(<ReturnComponent/>,document.getElementById("root4"));

const h5=document.createElement("h5");
h5.textContent="hola soy h5 de react";
h5.className="header";
console.log(h5);
document.getElementById("root5").append(h5);


const page = (<div>
        <h6>SOY H6</h6>
        <p>Soy un pagrafo</p>
    </div>);
console.log(page);
ReactDOM.render(
    page
    ,document.getElementById("root5")
);

const navbar = (
    <div>
        <h6>SOY LA ETIQUETA 6</h6>
        <ul>
            <li>
                Pricing
            </li>
            <li>
                Home
            </li>
            <li>
                Conctact us
            </li>
        </ul>
    </div>
)

ReactDOM.render(navbar,document.getElementById("root6"));