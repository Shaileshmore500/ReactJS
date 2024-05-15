import { useContext } from "react";
import { ToDoContext } from "../Store/To-Do-Context";
import ToDoItem from "./To-Do-Item";

function ToDoItems() {
  const { toDoItems } = useContext(ToDoContext)

  console.log(toDoItems)

  console.log("toDoItems")

  return <div className="conatainer">
    {
      toDoItems.map((i) => {
        <ToDoItem date={i.date} name={i.name} />

      })
    }

  </div>

}