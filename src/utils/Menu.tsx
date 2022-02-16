import { NavLink,Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Peliculas
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
            <NavLink className="nav-link" to="/generos">
              Generos
            </NavLink>
            </li>
            <li>
            <NavLink className="nav-link" to="/peliculas/filtrar">
              Filtrar Peliculas
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
          
          </ul>
        </div>
      </div>
    </nav>
  );
}
