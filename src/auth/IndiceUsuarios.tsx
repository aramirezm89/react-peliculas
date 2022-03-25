import axios from "axios";
import { useEffect, useState } from "react";
import { BasePath } from "../utils/BasePathApi";
import { usuarioDTO } from "./auth.model.t";
import sweetalert from "sweetalert2";
import { toast } from "react-toastify";
import Paginacion from "../utils/Paginacion";
import ListadoGenerico from "../utils/ListadoGenerico";
import Button from "../utils/Button";

export default function IndiceUsuarios(){
    
        const [listado, setListado] = useState<usuarioDTO[]>([]);
        const [totalDePaginas, setTotalDePaginas] = useState(0);
        const [recordsPorPagina, setRecordsPorPagina] = useState(10);
        const [pagina, setPagina] = useState(1);
        const [recargar, setRecargar] = useState(false);
        useEffect(() => {
            getUsuarios();
        }, [pagina, recordsPorPagina, recargar]);
      
        /**
         * getGeneros() devuelve un listado de generos desde la BD.
         */
        function getUsuarios() {
          const URL = `${BasePath}/cuentas/listadoUsuarios`;
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
      
        function hacerAdmin(id: string) {
            const alertBorrarRegistro = sweetalert.mixin({
              customClass: {
                confirmButton: "btn btn-primary ml-2",
                cancelButton: "btn btn-danger",
              },
              buttonsStyling: false,
            });
        
            alertBorrarRegistro
              .fire({
                title: "¿Esta seguro que desea dar permiso de administrador a este usuario?",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Si, dar permiso",
                cancelButtonText: "No, cancelar!",
                reverseButtons: true,
              })
              .then((result) => {
                if (result.isConfirmed) {
                  axios.post(`${BasePath}/cuentas/hacerAdmin`,JSON.stringify(id),{headers: {'Content-Type': 'application/json'}})
                    .then((response) => {
                      if (response.data.code === 200) {
                        alertBorrarRegistro.fire("El usuario ahora es admin!", response.data.message, "success");
                        setRecargar(!recargar);
                      } else {
                        toast.error(response.data.message.toString(), {
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
                    "No se realizaron los cambios.",
                    "error"
                  );
                }
            });
        }
        

         
      
        function removerAdmin(id: string) {
          const alertBorrarRegistro = sweetalert.mixin({
            customClass: {
              confirmButton: "btn btn-primary ml-2",
              cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
          });
      
          alertBorrarRegistro
            .fire({
              title: "¿Esta seguro que desea quitar permiso de administrador?",
              text: "Puede volver a conceder permisos de admnistrador cuando lo desee",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Si, quitar permiso",
              cancelButtonText: "No, cancelar!",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                axios.post(`${BasePath}/cuentas/removerAdmin`,JSON.stringify(id),{headers: {'Content-Type': 'application/json'}})
                  .then((response) => {
                    if (response.data.code === 200) {
                      alertBorrarRegistro.fire("El usuario ya no es admin!", response.data.message, "success");
                      setRecargar(!recargar);
                    } else {
                      toast.error(response.data.message.toString(), {
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
                  "No se realizaron los cambios.",
                  "error"
                );
              }
            });
        }
      
      
      
        return (
          <div className="container">
            <div className="row col-12 justify-content-between mt-3 mb-3">
              <h3>Usuarios</h3>
            
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
                      Rol
                    </th>
                    <th scope="col" className="col-4 text-center">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listado.map((usuario) => (
                    <tr key={usuario.id}>
                      <td className="text-center">{usuario.email}</td>
                      <td className="text-center">{usuario.claimValue? "Adminisitrador": "No Administrador"}</td>
                      <td className="text-center">
                      <Button
                          className="btn btn-primary"
                          onClick={() => hacerAdmin(usuario.id)}
                        >
                          Hacer Admin
                        </Button>
                        <Button
                          className="btn btn-danger ml-2"
                          onClick={() => removerAdmin(usuario.id)}
                        >
                         Remover Admin
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