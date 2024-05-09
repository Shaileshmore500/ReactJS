import Heading from './components/Heading'
import Container from './components/Container'
import Buttons from './components/Buttons'
import Display from './components/Display'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function App() {
  const type = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/']

  const [val, setVal] = useState('23456');

  const btnClick_handler = (event) => {
    if (event.target.innerText === "=")
      setVal(eval(val))
    else if (event.target.innerText === "C")
      setVal("")
    else
      setVal(val + event.target.innerText)
  }

  return (
    <Container>
      <h1>Calculator</h1>
      <Display displayValue={val} />
      <div className='btn_container' key="btn_container">
        {type.map((type) => <Buttons btnClick_handler={btnClick_handler} type={type} />)}
      </div>

    </Container>


  )
}

export default App
