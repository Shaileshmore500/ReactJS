import { createContext } from "react";

export const ToDoContext = createContext({
  toDoItems: [],
  addItem: () => { },
  deleteItem: () => { }
});


export const ToDoReducer = (currentItem, action) => {



}