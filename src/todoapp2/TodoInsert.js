import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("submitted");
      onInsert(value);
      setValue("");
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="type your to-do"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
