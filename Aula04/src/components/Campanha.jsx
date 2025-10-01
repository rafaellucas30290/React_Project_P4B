import React from 'react'
import styles from './Campanha.css'


    
const Campanha = () => {
    function definirMensagem(mes){
        if (mes === "setembro"){
            return "Prevenção ao suicídio"
        } else if (mes === "outubro"){
            return (mes === "Conscientização sobre o câncer de mama")
        } else if (mes === "novembro"){
            return ("Prevenção e combate ao câncer de próstata")
        }
    }
    function definirCor(mes){
        if (mes === "setembro"){
            return styles.setembro
        } else if (mes === "outubro"){
            return styles.outubro
        } else if (mes === "novembro"){
            return styles.novembro
        }
    }
    return (
    <div className={definirCor(pros.mes)}> <p> esse e o texto teste</p>
    </div>
  )
}

export default Campanha