import sweetalert from "sweetalert2"

export default function confirmarAccion(onConfirm:   Promise<any>){
    const alertBorrarRegistro =  sweetalert.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-2',
      },
      buttonsStyling: false
    })
    
    alertBorrarRegistro.fire({
      title: '¿Esta seguro que desea eliminar este registro?',
      text: "La acción no se podra revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then( (result) => {
      if (result.isConfirmed) {
          onConfirm.then((result) => {
         if(result.code === 200){
          alertBorrarRegistro.fire(
            'Borrado!',
            result.message,
            'success'
          )
          
         }else{
         return
         }
        }).catch(err =>{
           return err;
        })
      
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === sweetalert.DismissReason.cancel
      ) {
        alertBorrarRegistro.fire(
          'Cancelado',
          'Su registro se encuentra a salvo :)',
          'error'
        )
      }
    })
  
   }