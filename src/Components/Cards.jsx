import React from "react";
import imagenes from '../Images/imagenes';

const Cards = () => {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col">
                        <div className="card" style={{ width: 300 }}>
                            <img className="card-img-top" src={imagenes.Imag1} alt="No se encuentra la imagen" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                
                    <div className="col">
                        <div className="card" style={{ width: 300 }}>
                            <img className="card-img-top" src={imagenes.Imag2} height="270px" alt="No se encuentra la imagen" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ width: 300 }}>
                            <img className="card-img-top" src={imagenes.Imag3} height="270px" alt="No se encuentra la imagen" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;