import "./paginacion.css";
import { FC } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { cambiarPaginaThunk } from "../../actions/personajesActions";
import { IRootState } from "../../store/store";


const Paginacion: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const dispatch = useDispatch();

  const pageInfo = useSelector((state) => state.personajes.paginaInfo);
  const { next, prev } = pageInfo;

  const paginaAnterior = () => {
    dispatch(cambiarPaginaThunk(prev));
  };

  const siguientePagina = () => {
    dispatch(cambiarPaginaThunk(next));
  };

  return (
    <div className="paginacion">
      <button
        onClick={paginaAnterior}
        disabled={prev === null ? true : false}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        onClick={siguientePagina}
        disabled={next === null ? true : false}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;