import React from 'react';
import imagenes from '../Images/imagenes';

const Title = ()=>{
    return(
        <div className='container title'>
            <img src={imagenes.logo} width="250px" alt='No se ha encontrado la imagen'/>
        </div>
    )
}

export default Title;