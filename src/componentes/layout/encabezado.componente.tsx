import {Link} from "react-router-dom";
import './encabezado.css';


const Encabezado = () => {

    return <header>
            <div>
                <div>
                    <h2>Examen Final de Frontend IV Juan Fernando Gallego Castañeda</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                        <li><Link to="/detalle"></Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado