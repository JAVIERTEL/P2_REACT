import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
export default function Lista (props) {
    const navigate = useNavigate();
    return(<div id="productosresultados">
        <ul>
            {props.lista.map((item,index) => {
                return(
                    <li className="unproducto" key={item.title}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img className="img_card" variant="top" src={item.images[0]} />
                        <Card.Body>
                            <Card.Title><b>{item.title}</b></Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Button variant="primary" onClick={() => navigate('/products/' + index)}>Ver</Button>
                        </Card.Body>
                        </Card>
                    </li>
                )
            })}
        
        </ul>
    </div>
    )
}

