import { useNavigate } from "react-router-dom"
import Button from "../../utils/Button";

export default function CrearGeneros(){
    const navigate =  useNavigate();
    return(
        <div>
            <div>
                <h3>Crear generos</h3>
            </div>
            <div>
                <Button onClick={() => navigate("/generos")}>Guardar</Button>
            </div>
        </div>
    )
}