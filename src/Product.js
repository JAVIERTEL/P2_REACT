import {useNavigate, useParams} from "react-router-dom";
import Location from './Location.js';

export default function Product (props) {
    const navigate = useNavigate();
    let { productId } = useParams();

    return(<div>
        <Location/>
        <div id="product_container">
            <img id="img_product" src={props.product[productId].images[0]} alt="ProductImage" />
            <ul>
                <li id="card_product">
                    <h2 id="titulo">{props.product[productId].title}</h2>
                    <p>Descripción: <b>{props.product[productId].description}</b></p>
                    <p>Price: {props.product[productId].price}</p>
                    <p>Rating: {props.product[productId].rating}</p>
                    <p>Stock: {props.product[productId].stock}</p>
                </li>
            </ul>
        </div>
        <button id="volver" onClick={() => navigate('/')}>Volver</button>
    </div>
    )
}