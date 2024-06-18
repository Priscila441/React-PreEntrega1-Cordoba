/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

// eslint-disable-next-line no-unused-vars
const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams(); // Obtiene el id de la categoría desde la URL

  // Mapeo de categorías para mostrar títulos descriptivos
  const categoryMapTitulo = {
    ropaWomen: 'Ropa para Mujeres',
    ropaMen: 'Ropa para Hombres',
    accesorios: 'Accesorios',
    electronica: 'Electrónica',
    // Puedes añadir más categorías aquí según sea necesario
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const categoryMap = {
          ropaWomen: "women's clothing",
          ropaMen: "men's clothing",
          accesorios: 'jewelery',
          electronica: 'electronics'
        };
        const category = categoryMap[id] || '';
        const response = await fetch(`https://fakestoreapi.com/products${category ? `/category/${category}` : ''}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [id]);

  return (
    <div className="item-list-container">
      <h1>{categoryMapTitulo[id]}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
