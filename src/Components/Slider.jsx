import React from "react";
import { Carousel } from "react-bootstrap";
import imagenes from "../Images/imagenes";

const Slider = () => {

    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-80" src={imagenes.Imag1} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-dark">Aire Acondicionado</h3>
                        <p className="text-dark">Se otorga mantenimiento preventivo y de corrección, venta y suministro.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-80" src={imagenes.Imag1} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-dark">Equipos de Bombeo</h3>
                        <p className="text-dark">Mantenimiento de Motobombas, hidroflops, automatización</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-80" src={imagenes.Imag1} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-dark">Equipos Industriales</h3>
                        <p className="text-dark">Se otorga mantenimiento preventivo y de corrección, venta y suministro.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;