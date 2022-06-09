import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";

// function App() {
//   return (
//     <div>
//       <Counter />
//       <Info />
//     </div>
//   );
// }

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter />
      <hr />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
      {visible && <Info />}
    </div>
  );
};

export default App;
