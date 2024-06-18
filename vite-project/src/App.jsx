import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a MiTienda!" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="¡Bienvenido a la Categoría!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
