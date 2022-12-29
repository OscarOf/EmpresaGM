import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../Components/Title";
import TextBlock from "../Components/TextBlock";
import Cards from "../Components/Cards";

const Home = () => {
    return (
    
        <div className='container Home'>
            <Title />
            <TextBlock />
            <Cards />
            {/*}<img src={imagenes.logo} alt="No se ha encontrado la imagen"></img>
        <img src={imagenes.Imag3} alt="No se ha encontrado la imagen"/>
        <button className='btn btn-primary'>Hola</button>{*/}
        </div>
    
    )
};

export default Home;