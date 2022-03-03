import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BasePath } from "../utils/BasePathApi";
import Button from "../utils/Button";
import Paginacion from "../utils/Paginacion";
import { generoModelConId } from "./generos/GeneroModel";
import ListadoPeliculas from "./ListadoPeliculas";
import {pelicula} from "./PeliculasModelD"
export default function FiltroPeliculas() {
  const valorInicial: filtroPeliculasForm = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
    pagina:1,
    recordsPorPagina:10

  };

  const [generos, setGeneros] = useState<generoModelConId[]>([]);
  const [peliculas,setPeliculas] = useState<pelicula[]>([]);
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);//obtiene manejo de los parametros que haya en la URL;


  useEffect(() => {
    todosLosGeneros();
  },[])


  useEffect(() => {

    if(query.get('titulo')){
      valorInicial.titulo = query.get('titulo')!;  
    }
    if(query.get('generoId')){
      valorInicial.generoId = parseInt(query.get('generoId')!,10);
    }
    if(query.get('proximosEstrenos')){
      valorInicial.proximosEstrenos = true;
    }
    if(query.get('enCines')){
      valorInicial.enCines = true;
    }

    if(query.get('pagina')){
      valorInicial.pagina = parseInt(query.get('pagina')!,10);
    }
    buscarPeliculas(valorInicial)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  /**
   * funcion que ejecuta metodo en el controlador de generos el cual devuelve un listado de todos los generosDTO.
   */
 function todosLosGeneros(){
   const URL = `${BasePath}/generos/todos`;
   axios.get(URL).then(response => {
     setGeneros(response.data);
   })
 }


 function buscarPeliculas(values : filtroPeliculasForm){
   modificarURL(values);
   const URL = `${BasePath}/peliculas/filtrar`
    axios.get(URL,{params:values}).then(response => {
      const totalDeRegistros = parseInt(
        response.headers["cantidadtotalregistros"],
        10
      );
      setTotalDePaginas(Math.ceil(totalDeRegistros / valorInicial.recordsPorPagina));
      setPeliculas(response.data);
   })

 }


 function modificarURL(valores:filtroPeliculasForm){
   const queryStrings : string[] = [];
   if(valores.titulo){
      queryStrings.push(`titulo=${valores.titulo}`);
   }
   if(valores.generoId !==0){
     queryStrings.push(`generoId=${valores.generoId}`);
   }

   if(valores.proximosEstrenos){
     queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`);
   }

   if(valores.enCines){
    queryStrings.push(`enCines=${valores.enCines}`);
   }

   queryStrings.push(`pagina=${valores.pagina}`);
   
   navigate(`/peliculas/filtrar?${queryStrings.join('&')}`)
 }

  return (
    <div>
      <h3>Filtro Peliculas</h3>
      <Formik
        initialValues={valorInicial}
        onSubmit={(valores) => {
           valores.pagina = 1;
          buscarPeliculas(valores)
        }}
      >
        {(formikProps) => (
          <>
          <Form>
            <div className="form-inline">
              <div className="form-group mt-2">
                <div className="form-group mb-2">
                  <label htmlFor="titulo" className="sr-only">
                    Titulo
                  </label>
                  <Field
                    name="titulo"
                    className="form-control"
                    placeholder="Título de la pelicula"
                  />
                </div>

                <div className="form-group mx-sm-3 mb-2">
                  <Field component="select" className="form-control" name="generoId">
                    <option value="0">--Seleccione un género</option>
                    {generos.map((genero) => (
                      <option key={genero.id} value={genero.id}>
                        {genero.nombre}
                      </option>
                    ))}
                  </Field>
                </div>
                  
                <div className="form-group mx-sm-3 mb-2">
                    <Field type="checkbox" className="form-check-input" name="proximosEstrenos" id="proximosEstrenos" ></Field>
                    <label className="form-check-label" htmlFor="proximosEstrenos">Proximos Estrenos</label>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <Field type="checkbox" className="form-check-input" name="enCines" id="enCines" ></Field>
                    <label className="form-check-label" htmlFor="enCines">En Cines</label>
                </div>
                <Button 
                 className="form-group mx-sm-2 mb-2 btn btn-primary" 
                 onClick={() => formikProps.submitForm()} 
                 >Filtrar</Button>

                 <Button 
                 className="form-group mx-sm-2 mb-2 btn btn-danger"
                 onClick={() =>{
                   formikProps.setValues(valorInicial)
                   buscarPeliculas(valorInicial)
                 }}
                 >
                 Limpiar
                 </Button>
              </div>
            </div>
          </Form>
            <ListadoPeliculas peliculas={peliculas} />
            <Paginacion
                cantidadTotalDePaginas={totalDePaginas}
                paginaAcutal={formikProps.values.pagina}
                onChange={(nuevaPagina) => {
                  // valor de este  parametro {nuevaPagina} es devuelto desde el componente Paginacion desde la funcion seleccionarPagina()
                 formikProps.values.pagina = nuevaPagina;
                 buscarPeliculas(formikProps.values); 
                }}
              />
          </>
        )}
      </Formik>

    
    </div>
  );
}

interface filtroPeliculasForm {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCines: boolean;
  pagina:number;
  recordsPorPagina:number
}
