import { useParams } from "react-router-dom"

export default function EditarGeneros(){
    
    const {id} =  useParams();

    
    return(
       <div>
            <h3>Editar generos</h3>
            <h4>El id es {id}</h4>
       </div>
    )
}