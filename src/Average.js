import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("get counting average...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };
  // const onInsert = () => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // };

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <p>get counting average</p>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>insert</button>
      <ul>
        {list.map((value, index) => (
          <li ket={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>averge:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
