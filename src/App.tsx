import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./peliculas/Routes/RoutesConfig";
import Menu from "./utils/Menu";
import configurarValidaciones from "./Validaciones/Validaciones";
import AutenticacionContext from "./auth/AutenticacionContext"
import { claim } from "./auth/auth.model.t";
import { useEffect, useState } from "react";
import { obtenerClaim } from "./auth/manejadorJWT";
import { configurarInterceptor } from "./utils/Interceptores";
configurarValidaciones();
configurarInterceptor();

function App() {
  const [claims,setClaims] = useState<claim[]>([])

  useEffect(() =>{
    setClaims(obtenerClaim());
   
    
  },[])

  function actualizar(claims:claim[]){
    setClaims(claims);
  }

  function esAdmin(){
    return claims.findIndex(claim => claim.nombre === 'role' && claim.value === 'admin') >-1
  }
  return (
    <>
      <BrowserRouter>
        <AutenticacionContext.Provider value={{claims,actualizar}}>
        <Menu />
          <div className="container">
            <Routes>
                {routes.map(ruta =>
                 <Route key={ruta.path} 
                    path={ruta.path} 
                    element={ruta.esAdmin && !esAdmin()? <>No tiene permiso para acceder a este componente.</>:ruta.componente}
                 />)}
            </Routes>
          </div>
        </AutenticacionContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
