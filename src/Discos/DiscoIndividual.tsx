import { disco } from "./DiscoModel";
import css from "../peliculas/PeliculaIndividual.module.css"

export default function DiscoIndividual(props:discoIndividualProps){
 const {id,nombre, artista, caratula} = props.disco
 const construirLink = `/disco/${id}`

 return(
     <div className={css.div}>
         <a href={construirLink}>
            <img src={caratula} alt="poster" />
         </a>
         <h4>{artista}</h4>
         <p>{nombre}</p>
     </div>
 )

}
 
interface discoIndividualProps{
    disco : disco
}