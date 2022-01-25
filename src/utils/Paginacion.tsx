import { useEffect, useState } from "react";

export default function Paginacion(props: paginacionProps) {
  const [listadoLinks, setListadoLinks] = useState<modeloLink[]>([]);
  useEffect(() => {
    /**
     * la constante paginaAnteriorHabilitada guarda un booleano que sera true si se cumple la condicion
     * de que el numero de la pagina sea distinta de 1 (no tiene sentido habilitar si el usuario se encuentra en pagina 1)
     */
    const paginaAnteriorHabilitada = props.paginaAcutal !== 1;

    const paginaAnterior = props.paginaAcutal - 1;

    const links: modeloLink[] = [];

    links.push({
      texto: "Anterior",
      habilitado: paginaAnteriorHabilitada,
      pagina: paginaAnterior,
      activo: false,
    });

    /**
     * el ciclo for se realiza para iterar y mostrar las distitnas paginas de la aplicación
     */
    for (let i = 1; i <= props.cantidadTotalDePaginas; i++) {
      if (
        i >= props.paginaAcutal - props.radio &&
        i <= props.paginaAcutal + props.radio
      ) {
        links.push({
          texto: `${i}`,
          activo: props.paginaAcutal === i,
          habilitado: true,
          pagina: i,
        });
      }
    }

    /**
     * El siguiente codigo corresponde a la logica para la pagina siguiente al contrario de las lineas de arribas
     * que corresponden a la logica para la pagina anterior.
     */
    const paginaSiguienteHabilitada =
      props.paginaAcutal !== props.cantidadTotalDePaginas &&
      props.cantidadTotalDePaginas > 0;
    const paginaSiguiente = props.paginaAcutal + 1;
    links.push({
      texto: "Siguiente",
      pagina: paginaSiguiente,
      habilitado: paginaSiguienteHabilitada,
      activo: false,
    });

    setListadoLinks(links);
  }, [props.paginaAcutal, props.cantidadTotalDePaginas, props.radio]);


   /**
    * funcion que cambia la clase de estilo css segun si el @Param link
    * en su propiedad activo es true o false.
    * 
    * 
    */
  function obtenerClase(link: modeloLink) {
    if (link.activo) {
      return "active pointer";
    } else if (!link.activo) {
      return "disabled";
    } else {
      return "pointer";
    }
  }

  /**
   * funcion que se activa al clickear el elemento de la lista.
   * 
   * 
   */
  function seleccionarPagina(link : modeloLink) {
      if(link.pagina === props.paginaAcutal){
          return;
      }

      if(!link.habilitado){
          return;
      }

      props.onChange(link.pagina);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {listadoLinks.map((link) => (
          <li
          role="button"
            key={link.texto}
            onClick={() => seleccionarPagina(link)}
            className={`page-item cursor ${obtenerClase(link)}`}
          >
            <span className="page-link">{link.texto}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Propiedades necesarias para reenderizar un link.
 */
interface modeloLink {
  pagina: number;
  habilitado: boolean;
  texto: string;
  activo: boolean;
}

/**
 * propiedades que deben ser enviadas cuando se utilice este component(Paginacion)e.
 */
interface paginacionProps {
  paginaAcutal: number;
  cantidadTotalDePaginas: number;
  radio: number;
  onChange(pagina: number): void;
}

Paginacion.defaultProps = {
radio : 3
}