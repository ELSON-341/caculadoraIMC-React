import { useState } from 'react'
import { Button } from './Button.jsx'
import './ImcCalc.css'

const ImcCalc = () => { 
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const clearForm = (e) => {
    e.preventDefault()
    setHeight('')
    setWeight('')
  }
  
  return <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div id="form-inputs">
            <div className="form-controls">
                <label htmlFor="height">Altura:</label>
                <input type="text" name='height' id='height' placeholder='Exemplo 1,25' onChange={(e) => setHeight(e.target.value)} value={height || ''}/>
            </div>
            <div className="form-controls">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name='weight' id='weight' placeholder='Exemplo 70,25' onChange={(e) => setWeight(e.target.value)} value={weight || ''}/>
            </div>
        </div>
        <div id="action-control">
            <Button id="calc-btn" text="Calcular" />
            <Button id="clesr-btn" text="Limpar" action={clearForm}/>
        </div>
    </form>
  </div>
}

export default ImcCalc