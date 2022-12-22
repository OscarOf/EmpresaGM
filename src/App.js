import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import imagenes from './Images/imagenes';
//import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <img src={imagenes.logo} alt="No se ha encontrado la imagen"></img>
      <button className='btn btn-primary'>Hola</button>
      
    </div>
  );
}

export default App;
