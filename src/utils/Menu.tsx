import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import AutenticacionContext from "../auth/AutenticacionContext";
import Autorizado from "../auth/Autorizado";
import { logout } from "../auth/manejadorJWT";
import Button from "./Button";

export default function Menu() {
  
  const {actualizar, claims} = useContext(AutenticacionContext)

  function obtenerNombreUsuario():string{
    return claims.filter(claim => claim.nombre === "email")[0]?.value;
  }

  function collapse(){
    const navBar = document.getElementById('navbarScroll');
    if(navBar!.classList.contains("collapse")){
      navBar?.classList.remove("collapse")
    }else{
      navBar?.classList.add("collapse")
    }
   
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-xs navbar-light bg-light">
      
        <NavLink className="navbar-brand" to="/">
          React Peliculas
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={() => collapse()} aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mr-auto my-lg-0 my-xs-0 navbar-nav-scroll">
            <li>
              <NavLink className="nav-link" to="/peliculas/filtrar">
                Filtrar Peliculas
              </NavLink>
            </li>
            <Autorizado
              role="admin"
              autorizado={
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/generos">
                      Generos
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="nav-link" to="/actores">
                      Actores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/cines">
                      Cines
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/peliculas/crear">
                      Crear Peliculas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/usuarios">
                      Usuarios
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>

          <div className="d-flex">
              <Autorizado 
                  autorizado={
                  <>
                    <span className="nav-link">{"Hola, "+obtenerNombreUsuario()}</span>
                    <Button 
                      onClick={() =>{
                        logout();
                        actualizar([]);
                      }}
                     className="nav-link  btn btn-link" >Logout</Button>
                   </>
                }
                  noAutorizado={
                    <>
                        <Link to="/registro" className="nav-link btn btn-link" style={{color: 'black'}}>Registro</Link>
                        <Link to="/login" className="nav-link btn btn-link" style={{color: 'black'}}>Login</Link>

                    </>}
                  
              />
          </div>
        </div>
      
    </nav>
  );
}
