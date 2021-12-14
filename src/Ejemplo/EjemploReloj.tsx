import  React, { useEffect, useState } from 'react';
import { Component } from 'react';




function EjemploReloj(){

    const [fecha, setFecha] =  useState(new Date())
    useEffect(() => {
      const timerId = setInterval(() =>{
        setFecha(new Date());
      },1000)
      return () => clearInterval(timerId);
    })
  
    return (
      <div>
        <h3> EJemplo React </h3>
        <input placeholder="ejemplo" />
        <div> {fecha.toString()} </div>
      </div>
    );
}

export default EjemploReloj;