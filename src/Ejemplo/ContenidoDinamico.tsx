export default function ContenidoDinamico(props:any){
    const {calificacion,nombre} = props;

    // return(
    //     <div>
    //         {mensajeSecreto ? <p>Mensaje secreto: 42</p>: null};
    //     </div>
    // );

 if(calificacion >6 && calificacion <=7){
     return(
         <div>
             <h3>{nombre }Excelente calificación : {calificacion}</h3>
         </div>
     )
 }else if(calificacion <6 && calificacion >=4){
    return(
        <div>
        <h3>{nombre } regular {calificacion}</h3>
    </div>
    )
 }else if(calificacion >0 && calificacion <4){
    return(
        <div>
        <h3>{nombre} Mala calificación {calificacion}</h3>
    </div>
    )
 }else{
     return(
         <div>
             <h3>Calificacion erronea</h3>
         </div>
     )
 }
}