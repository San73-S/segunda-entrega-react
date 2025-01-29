import { useParams } from "react-router-dom";
import listaProductos from "../data";
import { Link } from "react-router-dom";
import "./Cards.css";

function DetalleProducto(){

    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=>producto.id ==productoId);

    const { image, title, price, description, category } = producto
    console.log(producto)
    return (
        <div className="detalle">
            <h2>{title}</h2>
            <div className="galeria producto">
                <article className="card-producto">
                    <img src={image} alt= {producto.descripiton}/>
                    <h3>{description}</h3>
                    <p>$ {price}</p>
                    <Link to={`/category/${category}`}>Volver</Link>
                </article>                
            </div>    
            <footer>@Todos los derechos reservados 2025</footer>      
        </div>
    )
}

export default DetalleProducto;