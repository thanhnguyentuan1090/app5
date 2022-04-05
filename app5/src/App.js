import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormInput from "./Components/FormInput";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const countTaskLeft = () => {
    let countList = todoList.filter((item) => item.done === false).length;
    return countList;
  };

  const handleInputClick = (newTask, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = newTask;

    setTodoList(newTodoList);
  };

  const addTodo = (text) => {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        done: false,
        text,
      },
    ]);
  };

  const removeTask = (id) => {
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });

    setTodoList(newTodoList);
  };

  const editTask = (id, newData) => {
    const newTodoList = todoList.map((item) => {
      let newItem = item;

      if (newItem.id === id) {
        newItem = { ...newItem, text: newData };
      }

      return newItem;
    });

    setTodoList(newTodoList);
  };

  return (
    <div className="allApp">
      <div>To do list</div>
      <div className="App">
        <FormInput onSubmit={addTodo} />
        <TodoList
          todoData={todoList}
          handleInputClick={handleInputClick}
          removeTask={removeTask}
          editTask={editTask}
        />{" "}
        <div className="task-list">{countTaskLeft()}</div>
      </div>
    </div>
  );
}

export default App;
