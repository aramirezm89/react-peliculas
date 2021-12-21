import { pelicula } from "./PeliculasModelD";
import Peliculaindividual from "./PeliculaIndividual";
import css from "./ListadoPeliculas.module.css";
import Loading from "../utils/Loading";
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPeliculas(props: listadoPeliculasProps) {
  const { peliculas } = props;

  return (
    <ListadoGenerico listado={peliculas}>
      <div className={css.div}>
        {peliculas?.map((pelicula) => (
          <Peliculaindividual pelicula={pelicula} key={pelicula.id} />
        ))}
      </div>
    </ListadoGenerico>
  );
}

interface listadoPeliculasProps {
  peliculas?: pelicula[];
}
