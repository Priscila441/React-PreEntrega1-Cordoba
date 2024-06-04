//import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge badge-pill badge-primary">5</span>
    </div>
  );
};

export default CartWidget;
