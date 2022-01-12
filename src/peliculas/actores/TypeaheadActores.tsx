

import { Typeahead } from "react-bootstrap-typeahead";
import { actorPelicula } from "./ActoresModel";

export default function TypeaheadActores(props:typeaheaActoresdProps){
    
    const actores : actorPelicula[] =[
        {id:1,nombre:'Leonardo Dicaprio',personaje:'',foto:'https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg'},
        {id:2,nombre:'Alfredo Castro',personaje:'',foto:'https://www.goldenglobes.com/sites/default/files/styles/homepage_carousel/public/2021-12/alfredo_castro_gettyimages-1321798183.jpg?h=3437b6b3&itok=0brEz6-M'},
        {id:3,nombre:'Brad Pit',personaje:'',foto:'https://es.web.img3.acsta.net/pictures/19/05/22/10/42/3773139.jpg'},
        {id:4,nombre:'Tom Cruise',personaje:'',foto:'https://media.revistavanityfair.es/photos/60e82fd0af2c957f3eff010a/master/w_1600%2Cc_limit/232901.jpg'},
    ]
    
    return(
        <>
            <label>Actores</label>
            <Typeahead 
             
                id="typeahead"
                onChange={actor =>{
                   console.log(actor)
                }}
                options={actores}
                labelKey={=>actor.nombre}
                filterBy={["nombre"]}
                placeholder="Escriba el nombre del actor"
                flip={true}
                minLength={2}
               
                renderMenuItemChildren={(actor,props) =>(

                    <>
                    <img alt="imagen actor" src={actor.foto}
                    style={{
                        height:'64px',
                        width:'64px',
                        marginRight:'10px'

                    }}
                    />
                    <span>{actor.nombre}</span>
                  </>


                
                )}
                    
                  
           

            />
        </>
    )
}

interface typeaheaActoresdProps{
    actores : actorPelicula[]
}