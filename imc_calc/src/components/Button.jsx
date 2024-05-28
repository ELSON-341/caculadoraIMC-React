import './Button.module.css'

export const Button = ({ id, text, action }) => {
  const handleAction = (e) => {
    action(e)
  }
  
  return <button type="button" onClick={(e) => handleAction(e)} id={id}>{text}</button> 
}
