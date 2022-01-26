import { actores } from "../peliculas/actores/ActoresModel";

/**
 * La siguiente funcion se realizo para transformar a FormData los datos para crear actor, ya que el back-end 
 * recibe en la funcion Post el objeto actor tipo FormData para poder recibir la imagen
 * 
 */
export function convertirActorFormData(actor: actores): FormData {
  const formData = new FormData();
  formData.append("nombre", actor.nombre);
  if (actor.biografia) {
    formData.append("biografia", actor.biografia);
  }
  if (actor.fechaNacimiento) {
    formData.append("fechaNacimiento", formatearFecha(actor.fechaNacimiento));
  }
  if (actor.foto) {
    formData.append("foto", actor.foto);
  }
  return formData;
}

function formatearFecha(date: Date) {
  date = new Date(date);

  const formato = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [{ value: month }, , { value: day }, , { value: year }] =
    formato.formatToParts(date);

  return `${year}-${month}-${day}`;
}
