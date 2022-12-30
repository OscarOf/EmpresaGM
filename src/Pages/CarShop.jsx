import "bootstrap/dist/css/bootstrap.min.css";
//import "./Services.css";
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";

const CarShop = () => {
    return (
        <>
            <div className="container-fluid">
                <Title />
                <NavBar />
            </div>
            <Footer />
        </>

    );
};

export default CarShop;