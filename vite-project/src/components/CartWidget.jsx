import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  // Número hardcodeado que muestra la cantidad de elementos en el carrito
  const itemCount = 5;

  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
