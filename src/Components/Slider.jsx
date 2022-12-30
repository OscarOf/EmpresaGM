import React from "react";
import imagenes from "../Images/imagenes";

const Slider = () => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imagenes.Imag1} className="d-block activo" alt="No se ha encontrado la imagen"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-dark">Aire Acondicionado</h5>
                            <p className="text-dark">Se otorga mantenimiento preventivo y de corrección, venta y suministro.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={imagenes.Imag2} className="d-block" alt="No se ha encontrado la imagen"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Equipos de Bombeo</h5>
                            <p>Mantenimiento de Motobombas, hidroflops, automatización</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={imagenes.Imag3} className="d-block" alt="No se ha encontrado la imagen"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Equipos Industriales</h5>
                            <p>Se otorga mantenimiento preventivo y de corrección, venta y suministro.</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;