import React from "react";

export const Todo = ({ todo }) => {
  return (
    <div key={todo.id} className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button>Completar</button>
        <button>X</button>
      </div>
    </div>
  );
};
