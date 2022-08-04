import React, { useMemo, useState, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

export default function Average() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      setList([...list, parseInt(number)]);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
      <b>평균값 : {avg}</b>
    </div>
  );
}
