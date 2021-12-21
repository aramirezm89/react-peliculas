import DiscoIndividual from "./DiscoIndividual";
import { disco } from "./DiscoModel";
import css from "../peliculas/ListadoPeliculas.module.css"

export default function ListadoDiscos(props:listadoDiscosProps){
 const {discos} = props;
 return(
     <div className={css.div}>
         {discos.map(disco => <DiscoIndividual disco={disco} key={disco.id}/>)}
     </div>
 )
}

interface listadoDiscosProps{
    discos : disco[]
}