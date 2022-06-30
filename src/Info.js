import { useEffect, useState } from "react";
import useInputs from "./useInput";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   useEffect(() => {
//     console.log("effect");
//     console.log(name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   }, [name]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input
//           value={name}
//           onChange={onChangeName}
//           placeholder="write your name"
//         />
//         <input
//           value={nickname}
//           onChange={onChangeNickname}
//           placeholder="write your nickname"
//         />
//       </div>
//       <div>
//         <b>이름:</b> {name}
//       </div>
//       <div>
//         <b>닉네임:</b> {nickname}
//       </div>
//     </div>
//   );
// };

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>name:</b> {name}
        </div>
        <div>
          <b>nickname:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
