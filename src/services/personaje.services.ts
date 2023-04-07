import Personaje from "../types/personaje.types";
import PaginaInfo from "../types/infoPagina.types";
import Episodio from "../types/episodio.types";


export const filtrarPersonajesAPI = async (
  name?: string
): Promise<[Personaje[], PaginaInfo, number] | [any, any, number]> => {
  let nameParam = "";
  if (name !== "" && name !== undefined) {
    nameParam = `name=${name}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character?${nameParam}`).then(
    function (response) {
      return response
        .json()
        .then((data) => [data.results, data.info, response.status]);
    }
  );
};

export const cambiarPagina = async (
  url: string
): Promise<[Personaje[], PaginaInfo]> => {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};

export const fetchEpisodios = async (id: (string | undefined)[]): Promise<Episodio> => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();
  return data;
};