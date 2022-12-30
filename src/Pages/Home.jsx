import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../Components/Title";
import TextBlock from "../Components/TextBlock";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
            <div className='container Home'>
                <Title />
                <TextBlock />
                <Cards />
            </div>
            <Footer />
        </>
    )
};

export default Home;