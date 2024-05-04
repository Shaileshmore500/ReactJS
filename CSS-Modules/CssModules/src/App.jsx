
import './App.css'
import Error from "./components/Error"
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  var arr = ["Apple", "Banana", "coconut", "Jack-Fruit"];


  return (
    <center>
      <h1>Fruits</h1>
      <Error items={arr}></Error>
      <List items={arr}></List>

    </center>
  )
}

export default App
