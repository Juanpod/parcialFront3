import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  const [cedula, setCedula] = useState({
    numero: '',
    documento: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()
      
      if(cedula.numero.length >= 3 && cedula.documento.length >= 6 && cedula.numero.trim().length === cedula.numero.length){
        console.log("entre aqui")
        setShow(true)
        setErr(false)
      } else {
        console.log("else")
        setErr(true)
        setShow(false)
      }
      
  }
  console.log(cedula.numero)
  console.log(show)
  console.log(err)
  return (
    <>
      <div className="App">
        <h1>Verificar Cedula</h1>
        {show ? null : 
          <form onSubmit={handleSubmit}>
          <label>Cedula: </label>
          <input type='text' onChange={(event) => {setCedula({...cedula, numero: event.target.value})}}/>
          <label>Nro Documento: </label>
          <input type='text' onChange={(event) => {setCedula({...cedula, documento: event.target.value})}}/>
          <button>Verificar</button>
        </form>
        }
        
        {show && <Card cedula={cedula} setShow={setShow}/>}
        {err && <h4 style={{color:'red'}}> Por favor chequea que la información sea correcta</h4>}
        

      </div>

      
    </>
  )
}

export default App
