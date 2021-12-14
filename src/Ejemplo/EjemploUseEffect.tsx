import { useEffect,useState } from "react";

export default function EjemploUseEffect(){
    const [click,setClick] = useState(0)
    const [fecha, setFecha] = useState(new Date());

    useEffect(() => {
      console.log('useEffect del click');
      document.title = `${click} veces`
     
      return () =>(
          console.log("se va a destruir el componente")
        
      )
    },[click])

    useEffect(() =>{
        const timerId = setInterval(() =>{
            setFecha(new Date())
          },1000)
          console.log("useEffect de la fecha interval")
          return () =>{
              clearInterval(timerId)
          }
    })

    useEffect(() => {
        console.log("voy a ejecutarme una vez.")
    
    }, [])
    
    return(
        <>
          <button onClick={() => setClick(click +1)}>me has clickeado{click   }</button>
          <div>
              {fecha.toString()}
          </div>
        </>
      
    )
}