import { useContext } from "react";
import { ToDoContext } from "../Store/To-Do-Context";

function ToDoItem() {

  const context = useContext(ToDoContext)
  console.log(context);


  return <div className="container">
    {



      context.item.map((i) => {
        return (
          <div className="row mt-2">
            <div className="col-6">
              {i.name}
            </div>
            <div className="col-4">
              {i.date}
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger btn-delete" onClick={() => context.deleteItem(i.name)} >Delete</button>
            </div>
          </div>



        )
      })

    }
  </div>
}
export default ToDoItem;