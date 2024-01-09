import {AiFillDelete} from "react-icons/ai";
// eslint-disable-next-line react/prop-types
function Todoitem({ TodoItem, TodoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{TodoItem}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=> onDeleteClick(TodoItem)}>
            <AiFillDelete/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
