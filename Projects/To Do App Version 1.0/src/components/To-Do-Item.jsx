function ToDoItem({ item, deleteItem }) {

  return <div className="container">

    {

      item.map((i) => {
        return (
          <div className="row">
            <div className="col-6">
              {i.name}
            </div>
            <div className="col-4">
              {i.date}
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger" onClick={() => deleteItem(i.name)} >Delete</button>
            </div>
          </div>
        )
      })}
  </div>
}
export default ToDoItem;