import React, { useState } from "react";

export default function IterationSample() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "눈" },
    { id: 3, text: "얼음" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(names.length + 1);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    setNames([...names, { id: nextId, text: inputText }]);
    setNextId((curr) => curr + 1);
    setInputText("");
  };

  const deleteList = (id) => {
    setNames(names.filter((item) => item.id !== id));
  };

  const nameList = names.map((item) => (
    <li key={item.id} onDoubleClick={() => deleteList(item.id)}>
      {item.text}
    </li>
  ));

  return (
    <>
      <input
        type="text"
        placeholder="Input something"
        onChange={onChange}
        value={inputText}
      />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
}
