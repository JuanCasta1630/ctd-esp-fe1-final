import "./tarjeta-episodio.css";
import { FC } from "react";
import Episodio from "../../types/episodio.types";


const TarjetaEpisodio: FC<{ episodio: Episodio }> = ({ episodio }) => {
  return (
    <div className="tarjeta-episodio">
      <h4>{episodio?.name}</h4>
      <div>
        <span>{episodio?.episodio}</span>
        <span>Lanzado el: {episodio?.air_date}</span>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;