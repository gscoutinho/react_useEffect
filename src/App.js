import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [racas, setRacas] = useState([])
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/doguinhos')
      .then(response => response.json())
      .then(dados => {
        setRacas(dados)
      })

  }, [])

  useEffect(() => {

    if (filtro && filtro.length > 3) {
      fetch('http://localhost:8080/doguinhos?nome=' + filtro)
        .then(response => response.json())
        .then(dados => {
          setRacas(dados)
        })
    }

    if (filtro && filtro.length <= 3) {
      fetch('http://localhost:8080/doguinhos')
        .then(response => response.json())
        .then(dados => {
          setRacas(dados)
        })
    }

  }, [filtro])

  return (
    <div className='App'>
      <h1>Bem vindo aos doguinhos!</h1>
      <h4>Confira abaixo uma lista de raças de doguinhos</h4>

      <input
        placeholder='Buscar por raça'
        value={filtro}
        onChange={evento => setFiltro(evento.target.value)}
      />
      <ul>
        {racas.map(raca => <li key={raca.nome}>{raca.nome}</li>)}
      </ul>
    </div>
  );
}

export default App;
