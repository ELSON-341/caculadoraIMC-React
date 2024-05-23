import { useState } from 'react'
import './App.css'
// import {data} from './data/tada.js'
import {ImcCalc} from './components/ImcCalc.jsx'
import { ImcTable } from './components/ImcTable.jsx'

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault()
    console.log('Executou')
  }
  
  const [imc, setImc] = useState('')
  const [info, setInfon] = useState('')
  const [infoClass, setInfonClass] = useState('')

  return (
    <>
      <div className="container">
        {!imc ? <ImcCalc calcImac={calcImc}/> : <ImcTable />}
      </div>
    </>
  )
}

export default App
