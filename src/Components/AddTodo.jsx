/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import {BiMessageAdd} from 'react-icons/bi';
import { useState } from "react";
import style from "./AddTodo.module.css";
// eslint-disable-next-line no-unused-vars
function AddTodo(props, onnewItem) {
  const [todoName, SetTodoName] = useState();
  const [todoDueDate, SetDueDate] = useState();

  const handleNameChange = (event) => {
    SetTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    SetDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    props.onnewItem(todoName, todoDueDate);
    SetDueDate("");
    SetTodoName("");
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            value={todoName}
            className={style.input}
            placeholder="Enter Todo Here"
            type="text"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            value={todoDueDate}
            className={style.input}
            type="date"
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
