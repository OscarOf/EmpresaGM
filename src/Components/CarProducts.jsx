import React from "react";

export default function CarProducts({data, deleteFromCart}){
    return(
        <div className="container">
            <h2>{data.name}</h2>
            <button onClick={() => deleteFromCart(data.id)} className="btn btn-primary">Eliminar del Carrito</button>
            <a className="btn btn-primary" href={"https://wa.me/573015218891?text=Busco%20información%20de%20los%20siguientes%20servicios:%20"+data.name}>Solicitar Cotización</a>
        </div>
    )
}