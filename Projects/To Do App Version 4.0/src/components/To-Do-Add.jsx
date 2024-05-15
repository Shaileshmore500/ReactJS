import { useContext } from "react";
import { ToDoContext } from "../Store/To-Do-Context";

function ToDoApp() {

  let conext = useContext(ToDoContext);
  return <div className="container ">
    <div className="row">
      <div className="col-6">
        <input type="text" ref={conext.refName} placeholder="Enter To-Do Here" />

      </div>
      <div className="col-4">
        <input type="date" ref={conext.refDate} name="" id="" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success" onClick={conext.addItem}>Add</button>
      </div>
    </div>
  </div>

}

export default ToDoApp;