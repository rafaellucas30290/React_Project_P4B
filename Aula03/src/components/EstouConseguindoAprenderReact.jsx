import React from 'react'

const EstouConseguindoAprenderReact = (props) => {
    const i = props.i;
  
    return (
    <div>
        {i ? <h1> sim</h1> : <h1> nao</h1>}
    </div>
  )
}

export default EstouConseguindoAprenderReact