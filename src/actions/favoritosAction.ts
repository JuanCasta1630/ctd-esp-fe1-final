import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";

interface FavoritosAction extends Action {
  type: "TOGGLE_FAVORITO";
  personaje: Personaje;
}

interface FavoritosRemoveAllAction extends Action {
  type: "REMOVE_ALL_FAVORITO";
}

export const toggleFavorito: ActionCreator<FavoritosAction> = (
  personaje: Personaje
) => ({
  type: "TOGGLE_FAVORITO",
  personaje,
});

export const removeAllFavorito: ActionCreator<
  FavoritosRemoveAllAction
> = () => ({
  type: "REMOVE_ALL_FAVORITO",
});

export type FavoritosActions =
  | ReturnType<typeof toggleFavorito>
  | ReturnType<typeof removeAllFavorito>;