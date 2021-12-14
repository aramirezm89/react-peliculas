export default function FormularioTexto(props:formularioTextoProps){
    const {manejarKeyUp} = props;
return(
    <input type="text" onKeyUp={(e) => manejarKeyUp(e.currentTarget.value)} />
)
}

interface formularioTextoProps{
    manejarKeyUp(texto:string) : void
}