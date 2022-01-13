import { map } from "leaflet";
import { ReactElement, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import Button from "../../utils/Button";
import { actorPelicula } from "./ActoresModel";
import { DragDropContext , Droppable, Draggable} from "react-beautiful-dnd";

export default function TypeaheadActores(props: typeaheaActoresdProps) {
  

  
    const actores: actorPelicula[] = [
    {
      id: 1,
      nombre: "Leonardo Dicaprio",
      personaje: "",
      foto: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
    },
    {
      id: 2,
      nombre: "Alfredo Castro",
      personaje: "",
      foto: "https://www.goldenglobes.com/sites/default/files/styles/homepage_carousel/public/2021-12/alfredo_castro_gettyimages-1321798183.jpg?h=3437b6b3&itok=0brEz6-M",
    },
    {
      id: 3,
      nombre: "Brad Pit",
      personaje: "",
      foto: "https://es.web.img3.acsta.net/pictures/19/05/22/10/42/3773139.jpg",
    },
    {
      id: 4,
      nombre: "Tom Cruise",
      personaje: "",
      foto: "https://media.revistavanityfair.es/photos/60e82fd0af2c957f3eff010a/master/w_1600%2Cc_limit/232901.jpg",
    },
  ];


  const seleccionPorDefecto: actorPelicula[] = []
  

 
  return (
    <>
      <label>Actores:</label>
      <Typeahead
        id="typeahead"
        onChange={(actores) => {
          if (!props.actores.find((actor) => actor.id === actores[0].id)) {
            props.onAdd([...props.actores, actores[0]]);
          }
        }}
        options={actores}
        labelKey={(actor) => actor.nombre}
        filterBy={["nombre"]}
        placeholder="Escriba el nombre del actor"
        flip={true}
        minLength={2}
        selected={seleccionPorDefecto}
        renderMenuItemChildren={(actor, props) => (
          <>
            <img
              alt="imagen actor"
              src={actor.foto}
              style={{
                height: "64px",
                width: "74px",
                marginRight: "10px",
              }}
            />
            <span>{actor.nombre}</span>
          </>
        )}
      />
      <div>
       <DragDropContext onDragEnd={props.onDragEndActores}>
           <Droppable droppableId="actores">
              {(provider) =>(
                    <ul className="list-group" {...provider.droppableProps} ref={provider.innerRef}>
                    {props.actores.map((actor,index) =>{ return (
                      
                      <Draggable key={actor.id} draggableId={actor.id.toString()} index={index}>
                          {(provided) =>(
                               
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref = {provided.innerRef}
                      className="list-unstyled list-group-item list-group-item-action mt-2"
                      key={actor.id}
                    >
                      {props.listadoActoresUI(actor)}
                      <span>
                        <Button
                          className="badge  rounded-circle ml-2 btn btn-danger"
                          onClick={() => props.onRemove(actor)}
                        >
                          X
                        </Button>
                      </span>
                    </li>
                  
                          )}
                      </Draggable>
                    )})}
                    {provider.placeholder}
                </ul>
              )}
           </Droppable>
       </DragDropContext>
      
      </div>
    </>
  );
}

interface typeaheaActoresdProps {
  actores: actorPelicula[];
  onAdd(actores: actorPelicula[]): void;
  listadoActoresUI(actor: actorPelicula): ReactElement;
  onRemove(actor: actorPelicula): void;
  onDragEndActores(result : any):void;
}
