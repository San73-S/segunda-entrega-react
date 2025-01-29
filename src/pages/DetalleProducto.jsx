import { useParams } from "react-router-dom";
import listaProductos from "../data";
import { Link } from "react-router-dom";

function DetalleProducto(){

    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=>producto.id ==productoId);

    const { image, title, price, description, category } = producto
    console.log(producto)
    return (
        <div>
            <h1>Detalle productos</h1>
            <div className="galeria">
                <img src={image} alt= {producto.descripiton}/>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <p>{price}$</p>
                <Link to={`/category/${category}`}>Volver</Link>
            </div>          
        </div>
    )
}

export default DetalleProducto;