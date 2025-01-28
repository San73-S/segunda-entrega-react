import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Home from "./pages/Home";
import DetalleProducto from "./pages/DetalleProducto";

import "./App.css"

function App() {
  return (
    
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home/>} />
          <Route path="/productos" element={<Productos/>} /> 
          <Route path="/productos/:productoId" element={<DetalleProducto/>}/>          
        </Route>
          <Route path="*" element={<Error/>} />
      </Routes>      
    </BrowserRouter>

  );
}

/*
/category/:id
/item/:id
*/ 

export default App; 