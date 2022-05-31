import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>plus</button>
      <button onClick={() => setValue(value - 1)}>minus</button>
      <button onClick={() => setValue(value * 2)}>multiple</button>
      <button onClick={() => setValue(value / 2)}>divide</button>
    </div>
  );
};

export default Counter;
