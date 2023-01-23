import "bootstrap/dist/css/bootstrap.min.css";
import "./CarShop.css";
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ReactWhatsapp from "react-whatsapp";
import { useReducer } from "react";
import ProductItem from "../Components/ProductItem";
import CarProducts from "../Components/CarProducts";
import { reducerCart, productsInitialState } from "../reducers/shoppingCart";
import TYPES from "../reducers/actionTypes";


const CarShop = () => {

    const [state, dispatch] = useReducer(reducerCart, productsInitialState);

    const addToCart = (id) => {
        dispatch({
            type: TYPES.ADD_TO_CART,
            payload: id
        })
    }

    const deleteFromCart = (id) => {
        dispatch({
            type: TYPES.DELETE_PRODUCT_FROM_CART,
            payload: id
        })
    }

    const clearCart = () => {
        dispatch({
            type: TYPES.DELETE_ALL_FROM_CART
        })
    }

    return (
        <>
            <div className="container-fluid contenedor">
                <Title />
                <NavBar />
                <div className="row">
                    <div className="col sidea">
                        {
                            state.products.map((product) => {
                                return <ProductItem key={product.id} data={product} addToCart={addToCart} />
                            })
                        }
                    </div>

                    <div className="col sideb">
                        <button onClick={() => clearCart()} className="btn btn-primary boton">Limpiar Carrito</button>
                        {
                            state.cart.length === 0 && <p>No hay servicios en el carrito de compras</p>
                        }
                        {
                            state.cart.map((productCart) => {
                                
                                return( 
                                       
                                    <CarProducts key={productCart.id} data={productCart} deleteFromCart={deleteFromCart} />                                                                        
                                )
                            })
                        }
                        <ReactWhatsapp number='57-301-521-8891' message={'Busco información de los siguientes servicios: '+state.cart.map(productCart=>productCart.name)} className="btn btn-primary">Whatsapp
                        </ReactWhatsapp>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default CarShop;