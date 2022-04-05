import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function TodoList(props) {
  return (
    <div className="todo-list">
      <ul>
        {props.todoData.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              dataItem={item}
              index={index}
              handleInputClick={props.handleInputClick}
              removeTask={props.removeTask}
              editTask={props.editTask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

function TodoItem(props) {
  const { dataItem, index } = props;
  const [edit, setEdit] = useState(false);
  const [newData, setNewData] = useState(dataItem.text);

  const handleTextariaChange = (e) => {
    setNewData(e.target.value);
  };

  return (
    <li className="todo-item">
      <div
        className="item-data"
        onClick={() => {
          !edit &&
            props.handleInputClick(
              {
                text: dataItem["text"],
                done: !dataItem.done,
              },
              index
            );
        }}
      >
        {/* <input type='radio' checked={dataItem.done} /> */}

        {edit === true ? (
          <span>
            <textarea
              type="text"
              value={newData}
              onChange={handleTextariaChange}
            />
          </span>
        ) : (
          <span>{dataItem["text"]}</span>
        )}
      </div>

      <div className="item-action">
        {edit === true ? (
          <FontAwesomeIcon
            icon={faCircleCheck}
            onClick={() => {
              setEdit(false);
              props.editTask(dataItem.id, newData);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => {
              setEdit(true);
            }}
          />
        )}

        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            props.removeTask(dataItem.id);
          }}
        />
      </div>
    </li>
  );
}
