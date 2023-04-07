import { FC } from "react";
import { IRootState } from "../../store/store";
import Personaje from "../../types/personaje.types";
import { toggleFavorito } from "../../actions/favoritosAction";
import "./boton-favorito.css";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";


const BotonFavorito: FC<{personaje: Personaje}> = ({personaje}) => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const favoritoMap = useSelector((state) => state.favoritos.favoritosMapa);
  const dispatch = useDispatch();

  const src = require(favoritoMap.has(personaje.id)
  ? "../../Assets/estrella-llena.png"
  : "../../Assets/estrella.png");


const toggleFavoritos = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault();
  dispatch(toggleFavorito(personaje));
};

return (
  <button className="button-favorite" onClick={toggleFavoritos} type="button">
    <img src={src} alt={"favorito"} />
  </button>
);
};

export default BotonFavorito;