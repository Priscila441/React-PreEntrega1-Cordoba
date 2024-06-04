import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a MiTienda!" />
    </div>
  );
};

export default App;

