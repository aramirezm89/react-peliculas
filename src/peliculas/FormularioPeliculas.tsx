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


export default function FormularioPeliculas(props:formularioPeliculasProps){
    const {model, onSubmit} = props;

    const [generosSeleccionados,setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados,setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados));

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

                <div className="form-group mt-3">
                    <label>Generos</label>
                    <SelectorMultiple seleccionados={generosSeleccionados} noSeleccionados={generosNoSeleccionados} 
                    onChange={(seleccionados,noSeleccionados)=>{
                     setGenerosSeleccionados(seleccionados);
                     setGenerosNoSeleccionados(noSeleccionados);
                    }}/>
                </div>
               <div className="mt-3">
               <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                <Link className="btn btn-secondary" to="/">Cancelar</Link>
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
}