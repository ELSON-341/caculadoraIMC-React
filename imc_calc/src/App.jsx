import { useState } from 'react'
import './App.css'
import {ImcCalc} from './components/ImcCalc.jsx'
import {data} from './components/data/data.js'
import { ImcTable } from './components/ImcTable.jsx'

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault()
    
    if(!height || !weight) return

    const weightFloat = +weight.replace(',', '.')
    const heightFloat = +height.replace(',', '.')

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
    setImc(imcResult);
  }
  
  const [imc, setImc] = useState('')
  const [info, setInfon] = useState('')
  const [infoClass, setInfonClass] = useState('')

  return (
    <>
      <div className="container">
        {!imc ? <ImcCalc calcImac={calcImc}/> : <ImcTable data={data}/>}
      </div>
    </>
  )
}

export default App
