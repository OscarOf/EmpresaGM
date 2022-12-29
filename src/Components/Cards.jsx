import React from "react";
import imagenes from '../Images/imagenes';
import { NavLink } from "react-router-dom";

const Cards = () => {
    return (
        <>
        <div className="container">
                <div className="row ">
                    <div className="col">
                        <div className="card" style={{ width: 300 }}>
                            <img className="card-img-top" src={imagenes.Imag1} alt="No se encuentra la imagen" />
                            <div className="card-body">
                                <h5 className="card-title">Aire Acondicionado</h5>
                                <p className="card-text">-Minisplit</p>
                                <p className="card-text">-Cassette</p>
                                <p className="card-text">-Piso Techo </p>                                
                                <p className="card-text">-Aires Centrales</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col">
                        <div className="card" style={{ width: 300, padding: 5 }}>
                            <img className="card-img-top" src={imagenes.Imag2} height="270px" alt="No se encuentra la imagen" />
                            <div className="card-body">
                                <h5 className="card-title">Equipos Hidroneumáticos</h5>
                                <p className="card-text">-Motobombas</p>
                                <p className="card-text">-Hidroflops</p>
                                <p className="card-text">-Automatización</p>
                                <NavLink to="/Services" className="btn btn-primary">Saber Más</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ width: 300, padding: 5 }}>
                            <img className="card-img-top" src={imagenes.Imag3} height="270px" alt="No se encuentra la imagen" />
                            <div className="card-body">
                                <h5 className="card-title">Ventajas de nuestros servicios</h5>
                                <p className="card-text">-Todos nuestros servicios cuentan con garantía, contamos con transporte y logística para desplazarnos, manejamos todas las marcas</p>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Cards;