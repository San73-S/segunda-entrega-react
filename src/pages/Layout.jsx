import listaProductos from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Cards.css";

function Layout(){

    const { categoryId } = useParams();

    const productosFiltrados = categoryId ? listaProductos.filter((producto) => producto.category === categoryId): listaProductos;

    return(

        <div>        
            <div className="galeria">     
                {productosFiltrados.map((producto) => {
                return(
                <article key={producto.id}>
                    <p>{producto.title}</p>
                    <img src={producto.image}  alt= {producto.descripiton}/>
                    <Link to={`/item/${producto.id}`}>Ver detalles</Link>                    
                </article>
                );
                })} 
            </div>
            <footer>@Todos los derechos reservados 2025</footer>
        </div>
    );
}

export default Layout;