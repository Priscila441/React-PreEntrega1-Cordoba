/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../index.scss'; // Asegúrate de importar tus estilos

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Precio: ${item.price}</p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">
            Ver más detalles
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
