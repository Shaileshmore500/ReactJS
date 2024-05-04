
import './App.css'
import List from './components/List'
import Error from './components/Error'
import Container from './components/Container'
import Input from './components/Input'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  var arr = ["Apple", "Banana", "coconut", "Jack-Fruit"];
  function btncliked() {
    alert(123)
  }
  function btncliked2(a) {
    alert(a)
  }
  function inputChanged(e) {
    alert(e.target.value)

  }

  return (
    <center>
      <Container data="1">


        <h1>Fruits</h1>
        <Input></Input>
        <Error items={arr}></Error>
        <List items={arr}></List>
      </Container>
      <br />
      <Container>
        <div style={{ width: '100%', display: 'grid' }}>
          <button type="button" onClick={btncliked} className="btn btn-primary">Primary</button>
          <button type="button" onClick={() => btncliked2(12123123)} className="btn btn-secondary">Secondary</button>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" onChange={(event) => inputChanged(event)} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <button type="button" className="btn btn-danger">Danger</button>
          <button type="button" className="btn btn-warning">Warning</button>
          <button type="button" className="btn btn-info">Info</button>
          <button type="button" className="btn btn-light">Light</button>
          <button type="button" className="btn btn-dark">Dark</button>

          <button type="button" className="btn btn-link">Link</button>
        </div>
      </Container>
    </center>
  )
}

export default App
