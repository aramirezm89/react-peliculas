import React, { useContext } from 'react';
import { claim } from './auth.model.t';

const AutenticacionContext = React.createContext<{
    claims: claim[];
    actualizar(claims: claim[]):void
}>({claims:[],actualizar:()=>{}});


export default AutenticacionContext;


