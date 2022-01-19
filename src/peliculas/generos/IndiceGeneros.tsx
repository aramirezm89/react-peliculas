import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { generoModelConId } from "./GeneroModel";
import axios from "axios";
import { BasePath } from "../../utils/BasePathApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListadoGenerico from "../../utils/ListadoGenerico";
import Button from "../../utils/Button";
import Paginacion from "../../utils/Paginacion";

toast.configure();

export default function IndiceGeneros() {
  const [listado, setListado] = useState<generoModelConId[]>([]);
  const [totalDePaginas,setTotalDePaginas] = useState(0);
  const [cantidadDeRegistrosPorPagina,setCantidadDeRegistrosPorPagina] = useState(10);
 
 
  useEffect(() => {
    getGeneros();
  }, []);

  /**
   * getGeneros() devuelve un listado de generos desde la BD.
   */
  async function getGeneros() {
    const URL = `${BasePath}/generos`;
    await axios
      .get(URL)
      .then((response) => {
        /**
         * la constante totalDeRegistros almacena el numero de registros de la tabla Generos que proviene
         * en los headers enviados desde el back-end, en la cabecera que lleva por nombre cantidadTotalRegistros.
         * 
         * La logica para obtener el valor se encuentra en el metodo Get() en la funcion InsertarParametrosEnCabecera del back-end.
         */
        const totalDeRegistros = parseInt(response.headers['cantidadTotalRegistros'],10)
        setTotalDePaginas(Math.ceil(totalDeRegistros /cantidadDeRegistrosPorPagina));
        console.log(response.data);
        setListado(response.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="row col-12 justify-content-between mt-3">
        <h3>Géneros</h3>
        <Link className="btn btn-primary" to={"/generos/crear"}>
          Crear Genero
        </Link>
      </div>

    <Paginacion cantidadTotalDePaginas={} paginaAcutal={} onChange={}  />

      <ListadoGenerico listado={listado}>

        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col" className="col-4 text-center">#</th>
              <th scope="col"className="col-4 text-center">Nombre</th>
              <th scope="col"className="col-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listado.map(genero => 
              <tr key={genero.id}>
                 <th scope="row" className="text-center">{genero.id}</th>
                  <td className="text-center">{genero.nombre}</td>
                  <td className="text-center">
                    <Link className="btn btn-primary mr-3" to={`/generos/editar/${genero.id}`}>Editar</Link>
                    <Button className="btn btn-danger">Borrar</Button>
                  </td>
              </tr>
              )}
          </tbody>
        </table>

      </ListadoGenerico>

    







   
    </div>
  );
}
