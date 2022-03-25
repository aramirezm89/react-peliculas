import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import crearEntidad from "../api/CrearEntidad";
import AutenticacionContext from "./AutenticacionContext";
import FormularioAuth from "./FormularioAuth";
import { guardarTokenLocalstorage,obtenerClaim } from "./manejadorJWT";

export default function Registro() {
  const {actualizar} = useContext(AutenticacionContext)
  const navigate = useNavigate();
  return (
    <>
      <h2 className="mb-4 mt-2">Registro</h2>
      <FormularioAuth
        modelo={{ email: "", password: "" }}
        onSubmit={async (valores) =>
          await crearEntidad(valores, "cuentas/crear").then(result =>{
           if(result.code === 200){
            navigate("/")
            guardarTokenLocalstorage(result.token)
            actualizar(obtenerClaim());
           
           }
          })
        }
      />
    </>
  );
}


