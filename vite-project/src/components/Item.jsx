/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} width="150" />
      <p>{item.price} USD</p>
      <Link to={`/item/${item.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
