import React, { useState } from 'react'
import Home from './Components/pages/Home'
import Initial from './Components/pages/Initial'
import Result from './Components/pages/Result'
import style from '../src/App.css?inline'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  const [telainicial, setTelaInicial] = useState(true);
  const [acertos, setAcertos] = useState(null);

  function trocarTela(params) {
    setAcertos(params)
    setTelaInicial(true)
  }

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={telainicial ? <Initial acertos = {acertos} trocarTela = {() => setTelaInicial(false)} /> : <Home trocarTela = {trocarTela} /> }></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App


