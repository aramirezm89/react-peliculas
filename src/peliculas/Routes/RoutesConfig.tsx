import IndiceUsuarios from "../../auth/IndiceUsuarios";
import Login from "../../auth/Login";
import Registro from "../../auth/Registro";
import CrearActores from "../actores/CrearActores";
import EditarActores from "../actores/EditarActores";
import IndiceActores from "../actores/IndiceActores";
import CrearCines from "../Cines/CrearCines";
import EditarCines from "../Cines/EditarCines";
import IndiceCines from "../Cines/IndiceCines";
import CrearPeliculas from "../CrearPeliculas";
import DetallePelicula from "../DetallePelicula";
import EditarPeliculas from "../EditarPeliculas";
import FiltroPeliculas from "../FiltroPeliculas";
import CrearGeneros from "../generos/CrearGeneros";
import EditarGeneros from "../generos/EditarGeneros";
import IndiceGeneros from "../generos/IndiceGeneros";
import PaginaPrincipal from "../PaginaPrincipal";

const routes=[
   
    {path:"/", componente: <PaginaPrincipal/>},
    {path:"/generos", componente :  <IndiceGeneros/>,esAdmin:true},
    {path:"/generos/crear", componente :  <CrearGeneros/>,esAdmin:true},
    {path:"/generos/editar/:id", componente :  <EditarGeneros/>,esAdmin:true},
    
    {path:"/actores", componente :  <IndiceActores/>,esAdmin:true},
    {path:"/actores/crear", componente :  <CrearActores/>,esAdmin:true},
    {path:"/actores/editar/:id", componente :  <EditarActores/>,esAdmin:true},

    {path:"/cines", componente :  <IndiceCines/>,esAdmin:true},
    {path:"/cines/crear", componente :  <CrearCines/>,esAdmin:true},
    {path:"/cines/editar/:id", componente :  <EditarCines/>,esAdmin:true},

    {path:"/peliculas/filtrar", componente :  <FiltroPeliculas/>},
    {path:"/peliculas/crear", componente :  <CrearPeliculas/> ,esAdmin:true},
    {path:"/peliculas/editar/:id", componente :  <EditarPeliculas/> ,esAdmin:true},
    {path:"/peliculas/detalle/:id", componente :  <DetallePelicula/>},

    {path:"registro",componente : <Registro/>},
    {path:"login",componente : <Login/>},
    {path:"usuarios",componente : <IndiceUsuarios/>,esAdmin:true},
    {path:"*", componente:<PaginaPrincipal/>},


]

export default routes;