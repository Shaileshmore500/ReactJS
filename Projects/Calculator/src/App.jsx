
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <div className='cal-container container'>
      <div className="head"><h1>Calculator</h1> </div>
      <div className="screen">
        <div class="input-group input-group-lg">

          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
      </div>
      <div className="btns">
        <button type="button" class="btn">Base class</button>
      </div>

    </div>
  )
}

export default App
