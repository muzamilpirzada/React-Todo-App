/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Todoitem from "./Todoitem";

import style from "./Todoitems.module.css";
const TodoItems = ({ todoitem, onDeleteClick }) => {
  return (
    <>
      <div className={style.itemsContainer}>
        {todoitem.map((item) => (
          <Todoitem TodoItem={item.name} TodoDate={item.dueDate} onDeleteClick={onDeleteClick}></Todoitem>
        ))}
        {/* <Todoitem TodoItem="Buy Milk" TodoDate="4/10/2023"></Todoitem>
        <Todoitem TodoItem="Buy Milk" TodoDate="4/10/2023"></Todoitem> */}
      </div>
    </>
  );
};

export default TodoItems;
