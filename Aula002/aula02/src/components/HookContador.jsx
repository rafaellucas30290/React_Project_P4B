import React from 'react'
import { useState } from 'react';

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementar(){
        setContador(contador+1);
    }
    function decrementar(){
        setContador(contador-1);
    }
    return (
    <div>
        <h1>contador</h1>
        <button onClick={incrementar}>+1</button>
        <button onClick={decrementar}>-1</button>
        <h1>O contador está em: {contador}</h1>
    
    
    
    </div>
  )
}

export default HookContador