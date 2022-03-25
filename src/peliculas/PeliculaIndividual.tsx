import React, { useContext, useState } from 'react';
import { pelicula } from "./PeliculasModelD";
import css from './PeliculaIndividual.module.css';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';
import { toast } from 'react-toastify';
import eliminarRegistro from '../api/EliminarRegistro';
import sweetalert from "sweetalert2";
import AlertaContext from '../utils/AlertContext';
import Autorizado from '../auth/Autorizado';
export default function Peliculaindividual(props : peliculaIndividualProps ){
    const {id,titulo,poster} = props.pelicula;
    const alerta = useContext(AlertaContext);


    function alertaDelete(id: number) {
        const alertBorrarRegistro = sweetalert.mixin({
          customClass: {
            confirmButton: "btn btn-primary ml-2",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });
    
        alertBorrarRegistro
          .fire({
            title: "¿Esta seguro que desea eliminar este registro?",
            text: "La acción no se podra revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, borrarlo",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              eliminarRegistro(id,"/peliculas/") //funcion que borra registro en base de datos
                .then((result) => {
                  if (result.code === 200) {
                    alertBorrarRegistro.fire("Borrado!", result.message, "success");
                    alerta();
                  } else {
                    toast.error(result.message.toString(), {
                      position: toast.POSITION.TOP_RIGHT,
                      theme: "colored",
                      autoClose: 2000,
                    });
                  }
                })
                .catch((err) => {
                  toast.error(err.message.toString(), {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                    autoClose: 2000,
                  });
                });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === sweetalert.DismissReason.cancel
            ) {
              alertBorrarRegistro.fire(
                "Cancelado",
                "Su registro se encuentra a salvo :)",
                "error"
              );
            }
            alerta();
          });
      }
    




    const construirLink  = () => `/peliculas/detalle/${id}`;
    return (
        <div className={css.div} >
            <a href={construirLink()}>
                <img src={poster} alt="Poster" />
            </a>
            <p className="mt-3">
                <a href={construirLink()}>{titulo}</a>
            </p> 
           <Autorizado role="admin" autorizado={ 
              <div>
                    <Link className="mr-2  btn btn-info " to={`/peliculas/editar/${props.pelicula.id}`}>Editar</Link>
                    <Button className="btn btn-danger"   onClick={() => alertaDelete(props.pelicula.id)}>Borrar</Button>
                </div>} 
            />
        </div>
    )
}

interface peliculaIndividualProps{
    pelicula: pelicula
}