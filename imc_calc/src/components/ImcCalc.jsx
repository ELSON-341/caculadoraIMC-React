import { Button } from './Button.jsx'
import './ImcCalc.css'

const ImcCalc = () => {
  return <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div className="form-inputs">
            <div className="form-controls">
                <label htmlFor="height">Altura:</label>
                <input type="text" name='height' id='height' placeholder='Exeplo 1,25' />
            </div>
            <div className="form-controls">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name='weight' id='weight' placeholder='Exeplo 1,25' />
            </div>
        </div>
        <div className="action-control">
            <Button id="calc-btn" text="Calcular" />
            <Button id="clesr-btn" text="Limpar"/>
        </div>
    </form>
  </div>
}

export default ImcCalc