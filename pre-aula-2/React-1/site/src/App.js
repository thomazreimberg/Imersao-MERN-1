import logo from './assets/logo.svg';
import './App.css';

import axios from 'axios'
import { useEffect, useState } from 'react';

import Counter from './components/Counter/Counter.js'

let api = axios.create({
  baseURL: "http://localhost:8081" 
})

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    async function loadBooks() {
      let resp = await api.get('/livros')
      setBooks(resp.data)
    }

    loadBooks()
  }, [])

  const [counter, setCounter] = useState([])
  useEffect(() => {
    async function laodQtd() {
      let resp = await api.get('/quantidade')
      setCounter(resp.data)
    }

    laodQtd()
  }, [])  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Livros</h1>
        {books.map(x =>
          <div key={x._id}> {x.nome} - {x.ano} </div>
        )}
        <div>
          <Counter value={counter} />
        </div>
      </header>
    </div>
  );
}

export default App;
