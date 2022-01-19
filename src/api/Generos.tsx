import { BasePath } from "../utils/BasePathApi";
import axios, { AxiosResponse } from "axios";
import { generoModel, generoModelConId } from "../peliculas/generos/GeneroModel";
import { useState } from "react";

export function getGenerosApi() {
  const URL = `${BasePath}/generos`;

  return axios.get(URL).then((response: AxiosResponse<generoModelConId[]>) => {
    return response.data;
  });

}

