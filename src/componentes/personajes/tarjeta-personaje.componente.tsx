import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import Personaje from "../../types/personaje.types";


const TarjetaPersonaje: FC<{personaje: Personaje}> = ({personaje}) => {
    let navigate = useNavigate();

  
    const redirigirPaginaDetalles = () => {
        navigate(`/detalle/${personaje.id}`, { state: { personaje: personaje } });
      };
    return (
         <div className="tarjeta-personaje">
        <img
        src={personaje.image}
        onClick={redirigirPaginaDetalles}
        alt={personaje.name}
          />
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito personaje={personaje} />
        </div>
    </div>
    );
};

export default TarjetaPersonaje;