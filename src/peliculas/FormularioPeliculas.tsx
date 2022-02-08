import { FormikHelpers,Formik, Form } from "formik";
import { peliculasCreacion } from "./PeliculasModelD";
import * as yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckBox from "../utils/FormGroupCheckBox";
import FormGroupDate from "../utils/FormGroupDate";
import FormGroupImage from "../utils/FormGroupImage";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple,{selectorMultipleModel} from "../utils/SelectorMultiple";
import { useState } from "react";
import {generoModelConId} from "../peliculas/generos/GeneroModel"
import { cineModelConId } from "./Cines/CinesModelo";
import TypeaheadActores from "./actores/TypeaheadActores";
import { actorPelicula } from "./actores/ActoresModel";
import FormGroupMarkDown from "../utils/FormGroupMarkDown";


export default function FormularioPeliculas(props:formularioPeliculasProps){
    const {model, onSubmit} = props;

    const [generosSeleccionados,setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados,setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados));

    const [cinesSeleccionados,setCinesSeleccionados] = useState(mapear(props.cinesSeleccionados))
    const [cinesNoSeleccionados,setCinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados))

    const [actoresSeleccionados,setActoresSeleccionados] = useState<actorPelicula[]>(props.actoresSeleccionados)

  


    function onDragEndActores (result:any) {
   
        const items = actoresSeleccionados;
        const [reorderItem] = items.splice(result.source.index,1);
       
       items.splice(result.destination.index,0, reorderItem);
        
       setActoresSeleccionados(items);
    }
    function mapear(arreglo:{id:number,nombre:string}[]) : selectorMultipleModel[]{
        return arreglo.map(valor => {
         return {key : valor.id, value:valor.nombre}
        })
    }

    return(
        <Formik
        initialValues={model}
        onSubmit={(valores,acciones) =>{
            valores.generosIds = generosSeleccionados.map(valor => valor.key);
            valores.cinesIds = cinesSeleccionados.map(valor => valor.key);
            valores.actores = actoresSeleccionados
            onSubmit(valores,acciones);

        }}
        validationSchema={yup.object({
            titulo: yup.string().required('Este campo es obligatorio.').primeraLetraMayuscula()
            . max(50,'campo no permite mas de 50 caracteres'),
            trailer: yup.string().required('Este campo es obligatorio.').url()
           
        })}
        >
        {formikProps =>(
            <Form>
                <FormGroupText campo="titulo"  label="Titulo" placeholder="Titulo de la pelicula."/>
                <FormGroupCheckBox campo="enCines" label="En cines" />
                <FormGroupText campo="trailer" label="Trailer" placeholder="URL trailer pelicula."/>
                <FormGroupDate campo="fechaLanzamiento" label="Fecha Lanzamiento" />
                <FormGroupImage campo="poster" label="Poster" imageUrl={model.posterURL}/>
                <FormGroupMarkDown campo="resumen" label="Resumen" />
                <div className="form-group mt-3">
                    <label>Generos</label>
                    <SelectorMultiple seleccionados={generosSeleccionados} noSeleccionados={generosNoSeleccionados} 
                    onChange={(seleccionados,noSeleccionados)=>{
                     setGenerosSeleccionados(seleccionados);
                     setGenerosNoSeleccionados(noSeleccionados);
                    }}/>
                </div>

                <div className="form-group mt-3">
                    <label>Cines</label>
                    <SelectorMultiple seleccionados={cinesSeleccionados} noSeleccionados={cinesNoSeleccionados} 
                    onChange={(seleccionados,noSeleccionados)=>{
                     setCinesSeleccionados(seleccionados);
                     setCinesNoSeleccionados(noSeleccionados);
                    }}/>
                </div>
               <div className="mt-3">

                <div className="form.group mt-3">
                    <TypeaheadActores 
                    onDragEndActores={onDragEndActores}
                    onAdd ={actores =>{
                        setActoresSeleccionados(actores);
                    }}
                    onRemove={actor =>{
                        const actores = actoresSeleccionados.filter(x => x.id !== actor.id);
                        setActoresSeleccionados(actores)
                    }}
                    actores={actoresSeleccionados}
                    listadoActoresUI = { (actor : actorPelicula )=>(
                       <>
                            {actor.nombre}: 
                            <input className="ml-2" placeholder="Personaje" type="text" value={actor.personaje} 
                            onChange={e =>{ 
                                const indice = actoresSeleccionados.findIndex(x => x.id === actor.id);
                                const actores = [...actoresSeleccionados];
                                actores[indice].personaje = e.currentTarget.value;
                                setActoresSeleccionados(actores);
                            }}
                            
                            />
                      </>
                    )}

                    />


                    
                   
                </div>  
              <div className="form.group mt-3">
              <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                <Link className="btn btn-secondary" to="/">Cancelar</Link>
              </div>
               </div>
            </Form>
        )}
        </Formik>
    )
}

interface formularioPeliculasProps{
    model: peliculasCreacion;
    onSubmit(values:peliculasCreacion,actions:FormikHelpers<peliculasCreacion>):void;
    generosSeleccionados:generoModelConId[];
    generosNoSeleccionados: generoModelConId[];
    cinesSeleccionados: cineModelConId[];
    cinesNoSeleccionados: cineModelConId[];
    actoresSeleccionados: actorPelicula[];
}