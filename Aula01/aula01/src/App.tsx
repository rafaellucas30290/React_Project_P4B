import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Divisao from './components/Divisao'
import Multiplicacao from './components/Multiplicacao'

const App = () => {
  return (
    <><div>
      <Adicao num1={2} num2={4} />
    </div><div>
        <Subtracao num1={2} num2={4} />
      </div><div>
        <Divisao num1={2} num2={4}/>
        </div><div>
          <Multiplicacao num1={2} num2={4}/>
          </div></>
  )
}

export default App