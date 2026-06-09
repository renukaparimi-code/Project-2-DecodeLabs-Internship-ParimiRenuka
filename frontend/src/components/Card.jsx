import { Link } from "react-router-dom";
import "../styles/Card.css";

function Card({item}) {

  return (
    <div className="card">

      <img src={item.image} alt="" />

      <h2>{item.name}</h2>

      <p>{item.description}</p>

      <Link to={`/details/${item.id}`}>

        <button>
          Learn More
        </button>

      </Link>

    </div>
  );
}

export default Card;