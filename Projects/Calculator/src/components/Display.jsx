function Display({ displayValue }) {

  return <>
    <div className="input-group input-group-lg display-container">
      <input type="text" value={displayValue} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter Input" />
    </div>
  </>
}
export default Display;