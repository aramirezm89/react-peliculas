import { NavLink,Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Peliculas
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item"></li>
            <NavLink className="nav-link" to="/generos">
              Generos
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
