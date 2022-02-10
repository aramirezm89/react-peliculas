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
    {path:"/generos", componente :  <IndiceGeneros/>},
    {path:"/generos/crear", componente :  <CrearGeneros/>},
    {path:"/generos/editar/:id", componente :  <EditarGeneros/>},
    
    {path:"/actores", componente :  <IndiceActores/>},
    {path:"/actores/crear", componente :  <CrearActores/>},
    {path:"/actores/editar/:id", componente :  <EditarActores/>},

    {path:"/cines", componente :  <IndiceCines/>},
    {path:"/cines/crear", componente :  <CrearCines/>},
    {path:"/cines/editar/:id", componente :  <EditarCines/>},

    {path:"/peliculas/filtrar", componente :  <FiltroPeliculas/>},
    {path:"/peliculas/crear", componente :  <CrearPeliculas/>},
    {path:"/peliculas/editar/:id", componente :  <EditarPeliculas/>},
    {path:"/peliculas/detalle/:id", componente :  <DetallePelicula/>},
    {path:"*", componente:<PaginaPrincipal/>},


]

export default routes;