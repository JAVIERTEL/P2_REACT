
import {useNavigate} from "react-router-dom";

export default function NoMatch (props){
    const navigate = useNavigate();

    return(<div>
        <h3 id="info">Ruta no encontrada</h3>
        <button id="volver" onClick={() => navigate('/')}>Volver</button>
    </div>
    )
}