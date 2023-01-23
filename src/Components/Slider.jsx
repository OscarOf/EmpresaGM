import React from "react";
import { Carousel } from "react-bootstrap";
import imagenes from "../Images/imagenes";

const Slider = () => {

    return (
        <div className="container bg-primary">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagenes.Imag7} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-dark">Aire Acondicionado</h3>
                        <p className="text-dark">Se otorga mantenimiento preventivo y de corrección, venta y suministro.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagenes.Imag8} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-dark">Minisplit</h3>
                        <p className="text-dark">Con distintos métodos de purificación que permiten disfrutar un ambiente más limpio. Ahorrando hasta el 70% de energía.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagenes.Imag1} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-dark">Cassette</h3>
                        <p className="text-dark">El cassette de 4 vías está diseñado para proporcionar una distribución de aire uniforme y un confort total al usuario, lo que hace de él la solución ideal para aplicaciones de pequeño comercio.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagenes.Imag5} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-white">Piso Techo</h3>
                        <p className="text-white">Fácil instalación y posibilidad de colocar  el condensador en lugares más convenientes.Bajo nivel de ruido y alta eficiencia, además protege el compresor contra las acciones climáticas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagenes.Imag6} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-white">Aire Centrales</h3>
                        <p className="text-white">Es el sistema de climatización eficiente por excelencia para cubrir las necesidades del hogar. Su funcionamiento es básico, pues lo que hace es recoger la energía del aire ambiente y, a través del ciclo de compresión de un gas refrigerante, potenciarla para climatizar la vivienda.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"src={imagenes.Imag4} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-white">Equipos de Bombeo-Motobomba</h3>
                        <p className="text-white">Recomendada para suministro de agua en hogares y pequeñas aplicaciones residenciales, transferencia de agua de un tanque a otro y pequeñas fuentes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={imagenes.Imag2} alt="La imagen no se encuentra disponible" />
                    <Carousel.Caption>
                        <h3 className="text-white">Equipos Industriales</h3>
                        <p className="text-white">Mantener tus equipos en condiciones adecuadas para así permitir la buena realización de la función que deben cumplir, aumentar la productividad y durabilidad de la maquinaria y reducir al máximo las fallas que puedan presentarse.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;