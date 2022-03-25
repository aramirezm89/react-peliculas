import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BasePath } from "../utils/BasePathApi";
import AutenticacionContext from "./AutenticacionContext";
import { credencialesUsuario } from "./auth.model.t";
import FormularioAuth from "./FormularioAuth";
import { guardarTokenLocalstorage, obtenerClaim } from "./manejadorJWT";

export default function Login() {

  const {actualizar} = useContext(AutenticacionContext);
  const navigate = useNavigate();

  async function login(credenciales: credencialesUsuario) {

    const URL = `${BasePath}/cuentas/login`;
   
    try {
      await axios.post(URL, credenciales).then((response) => {
        if (response.data.code === 200) {
          toast.success(response.data.message.toString(), {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored",
            autoClose: 1500,
          });
          navigate("/")
          guardarTokenLocalstorage(response.data.token)
          actualizar(obtenerClaim());
       
         
        
        } else {
          return toast.error(response.data.message.toString(), {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored",
            autoClose: 2000,
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <h2 className="mb-4 mt-2">Login</h2>
      <FormularioAuth
        modelo={{ email: "", password: "" }}
        onSubmit={async (valores) => await login(valores)}
      />
    </>
  );
}


