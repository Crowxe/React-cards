import './Card.css'
import { Link } from 'react-router-dom';

function Card({title = "título por defecto", description = "descripción por defecto"}) {
    return (

        <Link to = {title}>
    <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
        </Link>

    );
}

export default Card;