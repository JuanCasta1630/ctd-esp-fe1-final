import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { fetchEpisodios } from "../services/personaje.services";
import { IRootState } from "../store/store";
import Episodio from "../types/episodio.types";

interface obtenerEpisodiosAction extends Action {
  type: "OBTENER_EPISODIO";
  query: string;
}
interface obtenerEpisodiosActionSuccessAction extends Action {
  type: "OBTENER_EPISODIO_SUCCESS";
  episodios: Episodio | Episodio[];
}
interface obtenerEpisodiosErrorAction extends Action {
  type: "OBTENER_EPISODIO_ERROR";
  error: string;
}

const obtenerEpisodio: ActionCreator<obtenerEpisodiosAction> = (query: string) => {
  return {
    type: "OBTENER_EPISODIO",
    query: query,
  };
};

const obtenerEpisodioActionSuccess: ActionCreator<obtenerEpisodiosActionSuccessAction> = (
  episodios: Episodio | Episodio[]
) => {
  return {
    type: "OBTENER_EPISODIO_SUCCESS",
    episodios: episodios,
  };
};

const obtenerEpisodioError: ActionCreator<obtenerEpisodiosErrorAction> = (
  mensaje: string
) => {
  return {
    type: "OBTENER_EPISODIO_ERROR",
    error: mensaje,
  };
};

export type EpisodiosActions =
  | ReturnType<typeof obtenerEpisodio>
  | ReturnType<typeof obtenerEpisodioActionSuccess>
  | ReturnType<typeof obtenerEpisodioError>;

interface FetchEpisodiosThunkAction
  extends ThunkAction<void, IRootState, unknown, EpisodiosActions> {}

export const obtenerEpisodiosThunk = (
  episodioId: (string | undefined)[]
): FetchEpisodiosThunkAction => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchEpisodios(episodioId);
      if (response !== undefined) {
        dispatch(obtenerEpisodioActionSuccess(response));
      }
    } catch (e) {
      dispatch(obtenerEpisodioError(e));
    }
  };
};
