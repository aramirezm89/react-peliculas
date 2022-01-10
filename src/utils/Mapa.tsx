import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet"
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css"
import { coordenada } from "./CoordenadasModel";
import { useState } from "react";

let DefaultIcon = L.icon({
    iconUrl : icon,
    shadowUrl : iconShadow,
    iconAnchor : [16,37]

});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props:mapaProps){
    const {height,manejarClikMapa} = props;
    const [coordenadas,setCoordenadas] = useState<coordenada[]>(props.coordenadas);
    let lat = 0;
    let long = 0;
    coordenadas.forEach((coordenada,index) =>{
         lat = coordenada.latitud;
         long = coordenada.longitud;
    })
    return(
            <MapContainer
            center={[lat, long] }
            zoom={14}
            style={{height:height}}
            >
                <TileLayer attribution="React Peliculas"  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <ClickMapa  setPunto={coordenadas =>{
                    setCoordenadas([coordenadas]);
                    manejarClikMapa(coordenadas);
                }}/>
                {coordenadas.map((coordenada , index) => <Marker key={index}  position={[coordenada.latitud,coordenada.longitud]} />)}
            </MapContainer>
    )
}

function ClickMapa(props:clickMapaProps){
const{setPunto} = props
    useMapEvent('click',e =>{
        setPunto({latitud: e.latlng.lat,longitud: e.latlng.lng})
    }) //hoock de leaflet
    return null;
}


interface clickMapaProps{
    setPunto(coordenadas:coordenada) : void;
}



interface mapaProps{
    height:string;
    coordenadas:coordenada[];
    manejarClikMapa(coordenadas:coordenada):void;
}

Mapa.defaultProps ={
    height:'500px'
}