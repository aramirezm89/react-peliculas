import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IndiceGeneros from "./peliculas/generos/IndiceGeneros";
import PaginaPrincipal from "./peliculas/PaginaPrincipal";
import Menu from "./utils/Menu";
import routes from "./peliculas/Routes/RoutesConfig";
import configurarValidaciones from "./Validaciones/Validaciones";
configurarValidaciones();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Routes>
              {routes.map(ruta => <Route key={ruta.path}  path={ruta.path} element={ruta.componente} />)}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
