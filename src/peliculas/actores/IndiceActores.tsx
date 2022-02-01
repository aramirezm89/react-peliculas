import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import ListadoGenerico from "../../utils/ListadoGenerico";
import sweetalert from "sweetalert2";
import { BasePath } from "../../utils/BasePathApi";
import eliminarRegistro from "../../api/EliminarRegistro";
import { toast } from "react-toastify";
import Paginacion from "../../utils/Paginacion";
import { actorDTO } from "./ActoresModel";

export default function IndiceActores() {
  const [listado, setListado] = useState<actorDTO[]>([]);
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [recordsPorPagina, setRecordsPorPagina] = useState(10);
  const [pagina, setPagina] = useState(1);
  const [recargar, setRecargar] = useState(false);
  useEffect(() => {
    getActores();
  }, [pagina, recordsPorPagina, recargar]);

  /**
   * getActores() devuelve un listado de generos desde la BD.
   */
  function getActores() {
    const URL = `${BasePath}/actores`;
    axios
      .get(URL, { params: { pagina, recordsPorPagina } })
      .then((response) => {
        /**
         * la constante totalDeRegistros almacena el numero de registros de la tabla Generos que proviene
         * en los headers enviados desde el back-end, en la cabecera que lleva por nombre cantidadTotalRegistros.
         *
         * La logica para obtener el valor se encuentra en el metodo Get() en la funcion InsertarParametrosEnCabecera del back-end.
         */
        const totalDeRegistros = parseInt(
          response.headers["cantidadtotalregistros"],
          10
        );
        setTotalDePaginas(Math.ceil(totalDeRegistros / recordsPorPagina));
        setListado(response.data);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  /** 
   * 
   * function borrarRegistro(id: number) {
    const URL = `${BasePath}/generos/${id}`;
    return  axios
      .delete(URL)
      .then((response) => {
        if (response.data.code === 200) {
          return response.data;
        } else {
          return response.data;
        }
      })
      .catch((err) => {
       console.log(err);
      });
  }
  */
   

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
          eliminarRegistro(id,"/actores/") //funcion que borra registro en base de datos
            .then((result) => {
              if (result.code === 200) {
                alertBorrarRegistro.fire("Borrado!", result.message, "success");
                setRecargar(!recargar);
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
      });
  }



  return (
    <div className="container">
      <div className="row col-12 justify-content-between mt-3 mb-3">
        <h3>Actores</h3>
        <Link className="btn btn-primary" to={"/actores/crear"}>
          Crear actor
        </Link>
      </div>

      <div className="form-group row col-8 justify-content-between mt-5 ">
        <label className="font-weight-bolder mt-1" htmlFor="select">
          Cantidad de registros a mostrar:
        </label>
        <select
          className=" form-control"
          style={{ width: "80px" }}
          name="select"
          id="select"
          defaultValue={10}
          onChange={(e) => setRecordsPorPagina(parseInt(e.currentTarget.value))}
        >
          <option value={5}>5</option>
          <option value={10}>
            10
          </option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>

        <Paginacion
          cantidadTotalDePaginas={totalDePaginas}
          paginaAcutal={pagina}
          onChange={(nuevaPagina) => {
            // valor de este  parametro {nuevaPagina} es devuelto desde el componente Paginacion desde la funcion seleccionarPagina()
            setPagina(nuevaPagina);
          }}
        />
      </div>
      <ListadoGenerico listado={listado}>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col" className="col-4 text-center">
                Nombre
              </th>
              <th scope="col" className="col-4 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {listado.map((actor) => (
              <tr key={actor.id}>
                <td className="text-center">{actor.nombre}</td>
                <td className="text-center">
                  <Link
                    className="btn btn-primary mr-3"
                    to={`/actores/editar/${actor.id}`}
                  >
                    <FontAwesomeIcon icon={faEdit} title="Editar" />
                  </Link>
                  <Button
                    className="btn btn-danger"
                    onClick={() => alertaDelete(actor.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} title="Borrar" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListadoGenerico>
    </div>
  );
}
