

import Title from './components/Title'
import ToDoApp from './components/To-Do-Add'
import ToDoItem from './components/To-Do-Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useRef, useState } from 'react'
import Container from './components/Container'


function App() {

  const [item, setItem] = useState([]);

  const refName = useRef();
  const refDate = useRef();
  const addItem = () => {



    setItem([...item, { name: refName.current.value, date: refDate.current.value }])

    refName.current.value = '';
    refDate.current.value = '';


  }

  const deleteItem = (itemName) => {
    let arr = item.filter((i) => { debugger; return i.name !== itemName })
    setItem(arr);
  }






  return <center>
    <Container>
      <Title />
      <ToDoApp addItem={addItem} refName={refName} refDate={refDate} />
      <ToDoItem item={item} handleitem={item} deleteItem={deleteItem} />

    </Container>
  </center>

}

export default App
