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


  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Peliculas
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto ">
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
      </div>
    </nav>
  );
}
