import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      // console.log("Hand", text)
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
      />
      <button className="add-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
