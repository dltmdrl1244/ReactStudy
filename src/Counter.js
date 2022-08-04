import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
    message: "",
  });

  const { name, nickname, message } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <h1>이름 : {name}</h1>
      <h2>닉네임 : {nickname}</h2>
      <h3>메시지 : {message}</h3>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="nickname" value={nickname} onChange={onChange} />
      <input type="text" name="message" value={message} onChange={onChange} />
    </div>
  );
}
