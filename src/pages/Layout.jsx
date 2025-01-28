import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Layout(){

    return(

        <div>
            <NavBar/>
            <Outlet/>            
            <nav>Pier de pagina</nav>
        </div>
    );
}

export default Layout;