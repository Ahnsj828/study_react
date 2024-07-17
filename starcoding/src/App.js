//  // < useState >

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [time, setTime] = useState(1);

//   const clikBtn = () => {
//     setTime((prevTime) => (prevTime % 24) + 1);
//   };

//   const formatTime = (time) => {
//     if (time < 12) {
//       return `오전${time}시`;
//     } else if (time === 12) {
//       return `오후${time}시`;
//     } else if (time === 24) {
//       return `오전12시`;
//     } else {
//       return `오후 ${time - 12}시`;
//     }
//   };
//   return (
//     <div>
//       <span>현재시각 {formatTime(time)}</span>
//       <button onClick={clikBtn}>Update</button>
//     </div>
//   );
// }

// export default App;

//============================================================================

import { useState } from "react";
import "./App.css";

const heavyWork = () => {
  console.log("엄청 무거운 작업!!");
  return ["홍길동", "이영희"];
};

function App() {
  // const [names, setNames] = useState(["이영희", "홍길동"]);
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state: ", prevState);
      return [input, ...prevState];
    });
  };

  // console.log(input);

  return (
    <div>
      <input value={input} onChange={handleInputChange} type="text" />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
