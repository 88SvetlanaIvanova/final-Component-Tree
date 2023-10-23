import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
//text-decoration:line-through
//when I add a new todo item and I click on it, it cross out the item
//and when I click on it again it uncrosses it again
