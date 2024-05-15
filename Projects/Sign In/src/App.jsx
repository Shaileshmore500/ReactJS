import Form from './Components/Form'
import './App.css'
import { useRef } from 'react';


function App() {

  const emailRef = useRef();
  const formRef = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    emailRef.current.value = "";
    emailRef.current.focus();
    emailRef.current.style.border = "2px solid red";
    formRef.current.backgroundColor = 'yellow';

  }


  return (
    <>
      <Form handleFormSubmit={handleFormSubmit} emailRef={emailRef} formRef={formRef} />
    </>
  )
}

export default App
