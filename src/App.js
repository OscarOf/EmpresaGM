import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import imagenes from './Images/imagenes';
import Title from './Components/Title';
import TextBlock from './Components/TextBlock';
import Cards from './Components/Cards';

function App() {
  return (
    
    <div className="App">
      <>
      <div className='container'>
        <Title/>
        <TextBlock/>
        <Cards/>
        {/*}<img src={imagenes.logo} alt="No se ha encontrado la imagen"></img>
        <img src={imagenes.Imag3} alt="No se ha encontrado la imagen"/>
        <button className='btn btn-primary'>Hola</button>{*/}
      </div>
      </>
    </div>    
  );
}

export default App;
