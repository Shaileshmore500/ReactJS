

import Title from './components/Title'
import ToDoApp from './components/To-Do-Add'
import ToDoItem from './components/To-Do-Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer, useRef, useState } from 'react'
import Container from './components/Container'
import { ToDoContext, ToDoReducer } from './Store/To-Do-Context'

function App() {


  const { item, dispatchItem } = useReducer(ToDoReducer, [])

  const refName = useRef();
  const refDate = useRef();
  const addItem = () => {

    if (refName.current.value === '')
      refName.current.focus();
    else if (refDate.current.value === '')
      refDate.current.focus();
    else {
      // setItem([...item, { name: refName.current.value, date: refDate.current.value }])
      // refName.current.value = '';
      // refDate.current.value = '';
      const Itemm = {
        type: "ADD_ITEM",
        payload: {
          name: refName.current.value,
          date: refDate.current.value
        }
      }
      dispatchItem(Itemm);
    }

  }

  const deleteItem = (itemName) => {
    // let arr = item.filter((i) => { debugger; return i.name !== itemName })
    // setItem(arr);
    dispatchItem({ type: "DELETE_ITEM", payload: { name: itemName } })
  }



  return <ToDoContext.Provider value={{ item, deleteItem, addItem, refName, refDate }}>
    < center >
      <Container>
        <Title />
        <ToDoApp />
        <ToDoItem />

      </Container>
    </center >
  </ToDoContext.Provider>
}

export default App
