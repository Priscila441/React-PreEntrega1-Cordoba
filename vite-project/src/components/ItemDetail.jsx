/* eslint-disable react/prop-types */

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} width="300" />
      <p>{item.description}</p>
      <p>{item.price} USD</p>
    </div>
  );
};

export default ItemDetail;
