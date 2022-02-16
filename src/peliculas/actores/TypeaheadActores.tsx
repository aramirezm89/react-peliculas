import { map } from "leaflet";
import { ReactElement, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import Button from "../../utils/Button";
import { actorPelicula } from "./ActoresModel";
import { DragDropContext , Droppable, Draggable} from "react-beautiful-dnd";
import axios from "axios";
import { BasePath } from "../../utils/BasePathApi";

export default function TypeaheadActores(props: typeaheaActoresdProps) {
  
  const [opciones,setOpciones] =  useState<actorPelicula[]>([])




  const seleccionPorDefecto: actorPelicula[] = []
  const [cargando, setCargando] = useState(false)

 
  function manejarBusqueda(query: string){
    setCargando(true);
    axios.get(`${BasePath}/actores/buscarPorNombre/${query}`).then(response =>{
      setOpciones(response.data);
      setCargando(false);

    })
  }


  return (
    <>
      <label>Actores:</label>
      <AsyncTypeahead
        id="typeahead"
        onChange={(actores) => {
          if (!props.actores.find((actor) => actor.id === actores[0].id)) {
            props.onAdd([...props.actores, actores[0]]);
          }
        }}
        options={opciones}
        labelKey={(actor) => actor.nombre}
        filterBy={() =>true}
        isLoading={cargando}
        onSearch={manejarBusqueda}
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
