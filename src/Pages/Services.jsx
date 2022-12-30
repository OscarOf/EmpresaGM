import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";

const Services = () => {
    return (
        <>
            <div className="container-fluid contenedor">
                <Title />
                <NavBar/>
                <Slider />
                <Button />
            </div>
            <Footer />
        </>
    );
};

export default Services;