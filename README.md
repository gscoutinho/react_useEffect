# Exemplo de uso do `useEffect` do React

Este repositório contém um exemplo de como usar o `useEffect` do React para aumentar o valor do estado `count` em 1 após o componente ser montado.

## Tecnologias

* React
* Javascript

## Objetivo

O objetivo deste exemplo é mostrar como usar o `useEffect` para executar código após o componente ser montado.

## Exemplo

O código abaixo mostra como usar o `useEffect` para aumentar o valor do estado `count` em 1 após o componente ser montado:

```javascript
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Executa o código após o componente ser montado
    setCount(count + 1);
  }, []);

  return (
    <div>
      <h1>Olá, mundo!</h1>
      <p>O número é {count}</p>
    </div>
  );
}

export default App;


Neste exemplo, o `useEffect` é usado para executar o código `setCount(count + 1)` após o componente ser montado. O código `setCount(count + 1)` aumenta o valor do estado `count` em 1.

## Como usar o repositório

Para usar este repositório, siga estas etapas:

1. Clone o repositório para sua máquina local.
2. Instale as dependências do projeto usando o comando `npm install` ou `yarn install`.
3. Inicie o projeto usando o comando `npm start` ou `yarn start`.

O projeto será iniciado no navegador em http://localhost:3000.

## Outras ideias

Aqui estão algumas outras ideias para explorar o `useEffect`:

* Use o `useEffect` para atualizar o estado do componente com as informações do usuário de uma API.
* Use o `useEffect` para fazer uma solicitação HTTP para carregar dados de um servidor.
* Use o `useEffect` para fechar uma conexão com um banco de dados.

Experimente diferentes maneiras de usar o `useEffect` para aprender mais sobre essa ferramenta poderosa.

