import React from "react";
import imagenes from "../Images/imagenes";

const Footer = () =>{
    return(
        <footer className="pt-4 my-md-0 pt-md-5 bg-primary">
	        <div className="row">
	          <div className="col-12 col-md">
	            <img className="mb-2 ml-4" src={imagenes.logo} alt="No se ha encontrado la imagen" width="180" height="100"/>
	            <small className="d-block mb-1 ml-4 text-dark">© 2022-2023</small>
	          </div>
              <div className="col-6 col-md">
	            <h5 className="text-dark">Encuéntranos</h5>
	            <ul className="list-unstyled text-small">
	              <li className="text-dark">Cra 20C # 76-52</li>	              
	            </ul>
	          </div>	          
	          <div className="col-6 col-md">
	            <h5 className="text-dark">Contáctanos</h5>
	            <ul className="list-unstyled text-small">
	              <li className="text-dark">Teléfono:</li>
	              <li className="text-dark">+57-311-841-1703</li>
	              <li className="text-dark">Correo electrónico:</li>
	              <li className="text-dark">electrorefrigeracion_gm@hotmail.com</li>
	            </ul>
	          </div>	          
	        </div>
	    </footer>
    );
}

export default Footer;