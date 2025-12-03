import { useState } from 'react'
import React, {useEffect} from 'react'
import axios from 'axios'


const DpoLgpd = () => {

    const [Dpo, setDpo] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/dpolgpd").then(response => setDpo(response.data)).catch(error => console.error("Erro ao carregar a lista"))
    })

  return (

    <div>
    
        <h1>DpoLgpd</h1>

        {
            Dpo.map((dpo) => (
                <div key={(dpo.id)}>
                {dpo.texto}
                </div>
            ))
        }


    </div>

    

  )
}

export default DpoLgpd