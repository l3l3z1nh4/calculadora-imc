import { useState } from "react";
import Calculadora from "./components/Calculadora";
import Tabela from "./components/Tabela";
import './index.css'


function App() {
  
    return (
    <>
      <h1>Calculadora IMC</h1>
      <Calculadora/>
      <Tabela/>
      <footer>
        <p>por <a href="https://github.com/l3l3z1nh4">l3l3z1nh4</a> para EBAC</p>
        </footer>
    </>
  )
}

export default App
