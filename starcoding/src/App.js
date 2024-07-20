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

//============================================================================

// < useState >
// const[state, setState] = useState(초기값)

// 1. setState를 활용해서 state를 변경
//     state를 변경할 때 마다 컴포넌트는 다시 렌더링이 된다

// 2. state를 변경할 때 새로 변경될 state값이 이전 state 값과 연관이 되어 있다면 setState의 인자로 새로운 state를 리턴하는 콜백 함수를 넣어주는게 좋다
// setState((prevState) => {
//   return newState
// })

// 3. useState를 사용해서 초기 값을 받아올 때 어떤 무거운 일을 해야 된다면 useState의 인자로 콜백 함수를 넣어주면 맨 처음 엔더링이 될 때만 실행되게 할 수 있다.
// useState(() => {
//   return heavyWorks()
// })
