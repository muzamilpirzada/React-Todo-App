import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
// import Todoitem from "./Components/Todoitem";
import TodoItems from "./Components/Todoitems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // const initializeTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to Collgeg",
  //     dueDate: "4/10/2023",
  //   },
  // ];

   const [todoItems, SetTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    // add new element to the old array object

    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];

    SetTodoItems(newTodoItem);
  };


  // Delete the Todo Items 

  const handleDeleteItem =(todoItemName)=>{
    
     const newTodoItems = todoItems.filter((item)=> item.name !== todoItemName );

     SetTodoItems(newTodoItems);

  }



  return (
    <center className="todo-content">
      <AppName></AppName>
      <AddTodo onnewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoitem={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}


export default App;
