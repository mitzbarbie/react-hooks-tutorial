import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

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
      <hr />
      <Average />
    </div>
  );
};

export default App;
