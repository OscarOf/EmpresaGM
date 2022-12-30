import React from "react";

export default function ProductItem({data, addToCart}){
    return(
        <div className="container">
            <h2>{data.name}</h2>
            <button onClick={() => addToCart(data.id)} className="btn btn-primary">Agregar al Carrito</button>
        </div>
    )
}