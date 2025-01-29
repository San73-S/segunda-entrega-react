import { Link } from "react-router-dom";

function NavBar(){

    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/category/capot"}>Capot</Link>
            <Link to={"/category/puerta"}>Puerta</Link>
            <Link to={"/category/guardabarro"}>Guardabarros</Link>
        </nav>
    );
}

export default NavBar