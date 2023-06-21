import React from 'react';
import '../estilos/boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) /*props*/{
    return (
        <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} /*como un if, event listener(abajo) */
            onClick={manejarClic}> 
            {texto}
        </button>
    )
}

export default Boton;