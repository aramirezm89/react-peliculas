export default function MostrarTexto(props: mostrarTextoProps){
    const {texto} = props;
    return (
        <div>
            {texto}
        </div>
    )
}

interface mostrarTextoProps{
    texto : string
}
