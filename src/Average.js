import { useState } from "react";

const getAverage = (numbers) => {
  console.log("get counting average...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  return (
    <div>
      <p>get counting average</p>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>insert</button>
      <ul>
        {list.map((value, index) => (
          <li ket={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>averge:</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;
