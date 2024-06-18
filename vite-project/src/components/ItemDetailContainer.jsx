// src/components/ItemDetailContainer.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); // Obtiene el id del producto desde la URL

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
