import { useContext } from "react";
import { ToDoContext } from "../Store/To-Do-Context";

function ToDoItem({ name, date }) {




  return <div className="row mt-2">
    <div className="col-6">
      {name}
    </div>
    <div className="col-4">
      {date}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-danger btn-delete" onClick={() => { }} >Delete</button>
    </div>
  </div>


}
export default ToDoItem;