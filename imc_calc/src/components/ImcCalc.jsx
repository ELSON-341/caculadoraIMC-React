import { useState } from 'react'
import { Button } from './Button.jsx'
import './ImcCalc.css'

export const ImcCalc = ({ calcImac }) => { 
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const clearForm = (e) => {
    e.preventDefault()
    setHeight('')
    setWeight('')
  }

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, '')
  }

  const handleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value)

    setHeight(updateValue)
  }
  const handleWeightChange = (e) => {
    const updateValue = validDigits(e.target.value)

    setWeight(updateValue)
  }

  return <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div id="form-inputs">
            <div className="form-controls">
                <label htmlFor="height">Altura:</label>
                <input type="text" name='height' id='height' placeholder='Exemplo 1,25' onChange={(e) => handleHeightChange(e)} value={height || ''}/>
            </div>
            <div className="form-controls">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name='weight' id='weight' placeholder='Exemplo 70,25' onChange={(e) => handleWeightChange(e)} value={weight || ''}/>
            </div>
        </div>
        <div id="action-control">
            <Button id="calc-btn" text="Calcular" action={(e) => calcImac(e, height, weight)}/>
            <Button id="clesr-btn" text="Limpar" action={clearForm}/>
        </div>
    </form>
  </div>
}
