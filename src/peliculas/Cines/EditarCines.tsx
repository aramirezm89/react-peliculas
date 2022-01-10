import FormularioCines from "./FormulariosCines";

export default function EditarCines() {
    return (
      <div>
        <h3>Editar Cines</h3>
        <FormularioCines model={{nombre:'CinePlanet',latitud:-33.52573433896894,longitud: -70.70376697881817 }} onSubmit={async (values,actions)=>{
        await new Promise(resolve => {setTimeout(resolve,2000)})
          console.log(values);
          actions.resetForm();
        }} />
      </div>
    );
  }
  
