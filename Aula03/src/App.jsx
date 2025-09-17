import React from 'react'
import Aluno from './components/Aluno'
import Produto from './components/Produto';

const App = () => {
  const estoque = [
      {
        nome: "Arroz 1kg", quantidade: 10
      },
      {
        nome: "Feijao 1kg", quantidade: 2
      },
      {
        nome: "Macarrao Vitarela", quantidade: 0
      }

  ]

  return (
    <div>
      {estoque.map((produto) => {
        const status = produto.quantidade > 0 ? "DISPONIVEL" : "ESGOTADO"

        return (
          <Produto
            key={produto.nome}
            nome={produto.nome}
            quantidade={produto.quantidade}
            status={status}
            />
        );
      }
      
      )}
    </div>
  );
};

export default App