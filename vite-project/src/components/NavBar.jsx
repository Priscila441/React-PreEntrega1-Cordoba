import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">MiTienda</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/ropaWomen">Ropa para Mujeres</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/ropaMen">Ropa para Hombres</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/accesorios">Accesorios</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/electronica">Electrónica</NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

