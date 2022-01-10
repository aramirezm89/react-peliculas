import { useFormikContext } from "formik";
import { coordenada } from "./CoordenadasModel";
import Mapa from "./Mapa";

export default function MapaFormulario(props:mapaFormularioProps){
    const {coordenadas,campoLat,campoLng} = props;
    const {values} = useFormikContext<any>();
    function actualizarCampos(coordenadas:coordenada){
    values[campoLat] = coordenadas.latitud;
    values[campoLng] = coordenadas.longitud;
    }
    return(
        <Mapa 
           coordenadas={coordenadas}
           manejarClikMapa={actualizarCampos}
        />
    )
}


interface mapaFormularioProps{
    coordenadas : coordenada[];
    campoLat:string;
    campoLng:string;
}

MapaFormulario.defaultProps ={
    coordenadas:[]
}