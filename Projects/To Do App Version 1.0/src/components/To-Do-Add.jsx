function ToDoApp({ addItem, refDate, refName }) {
  return <div className="container ">
    <div className="row">
      <div className="col-6">
        <input type="text" ref={refName} placeholder="Enter To-Do Here" />

      </div>
      <div className="col-4">
        <input type="date" ref={refDate} name="" id="" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success" onClick={addItem}>Add</button>
      </div>
    </div>
  </div>

}

export default ToDoApp;