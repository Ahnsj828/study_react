// < useState >

import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(1);

  const clikBtn = () => {
    setTime((prevTime) => (prevTime % 24) + 1);
  };

  const formatTime = (time) => {
    if (time < 12) {
      return `오전${time}시`;
    } else if (time === 12) {
      return `오후${time}시`;
    } else if (time === 24) {
      return `오전12시`;
    } else {
      return `오후 ${time - 12}시`;
    }
  };
  return (
    <div>
      <span>현재시각 {formatTime(time)}</span>
      <button onClick={clikBtn}>Update</button>
    </div>
  );
}

export default App;
