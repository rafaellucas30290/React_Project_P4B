# 📘 React – Aulas 0 a 6 + Projeto Final “Site-Uniesp”

Este repositório contém o material completo de aprendizado e desenvolvimento em React, incluindo:

✔️ Aulas práticas (0 a 6) com exemplos, componentes, states e hooks

✔️ Projeto final: Site-Uniesp

✔️ Uso de React Router, Axios e JSON-Server

✔️ Estrutura completa para estudos de front-end moderno

Ideal para quem está iniciando com React e deseja acompanhar a evolução do aprendizado até um projeto real.
## 📚 Aulas 0 a 6

Cada pasta contém:

Exemplos práticos feitos em aula

Componentes básicos

Uso de props, states, eventos e hooks

Introdução a consumo de APIs

Boas práticas de organização no React

## 🏁 Projeto Final: Site-Uniesp

Uma aplicação React completa com:

✔️ Navegação com React Router

Roteamento de páginas

Componentes de layout (Navbar, Footer)

Rotas públicas (Ex: Inicial, Faculdade, DPO/LGPD, Notícias)

✔️ Backend Fake com JSON-Server

Utilizado para simular uma API REST durante o desenvolvimento.

# 🚀 Como Executar o Projeto
1. Clone o repositório
```
git clone https://github.com/usuario/repositorio.git

cd repositorio
```

▶️ Rodando as Aulas

Cada aula possui seu próprio projeto.
Para rodar, entre na pasta da aula desejada:

```
cd Aulas/Aula-03
npm install
npm run dev
```

▶️ Rodando o Projeto Final “Site-Uniesp”

1. Vá até a pasta do projeto

```
cd Site-Uniesp
```

2. Instale as dependências

```
npm install
```

3. Inicie o JSON-Server (fake API)

```
npx json-server --watch db.json --port 3001
```


🔗 A API irá rodar em:
http://localhost:3001/

4. Inicie o projeto React

```
npm run dev
```

# 🛠️ Tecnologias Utilizadas
No aprendizado (aulas):

React

JSX

Hooks (useState, useEffect)

CSS Modules

Componentização

No projeto final:

React Router Dom – controle de rotas e navegação

Axios – consumo de API simplificado

JSON-Server – backend fake para desenvolvimento

Bootstrap / React-Bootstrap (opcional)

# 📄 Funcionalidades do Site-Uniesp

Página inicial

Página “A Faculdade”

Página DPO / LGPD

Página de Notícias (consumo de API via Axios)

Navbar fixa e responsiva

Estrutura modular de componentes
