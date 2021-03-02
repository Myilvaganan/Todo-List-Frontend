import React from "react";
import "./TodoList.css";
import DeleteIcon from "@material-ui/icons/Delete";
import FlipMove from "react-flip-move";

function TodoList(props) {
  const items = props.items;
  const ListItems = items.map((item) => {
    return (
      <div className="todo" key={item.key}>
        <p>
          <input
            className="edit"
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.editUpdate(e.target.value, item.key);
            }}
          />
        </p>
        <DeleteIcon
          className="delete-icon"
          onClick={() => props.deleteItem(item.key)}
        />
      </div>
    );
  });

  return (
    <div className="todo-container">
      <FlipMove duration={500} easing="ease">
        {ListItems}
      </FlipMove>
    </div>
  );
}

export default TodoList;
