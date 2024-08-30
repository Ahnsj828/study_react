import { useState } from "react";
import Box from "./components/Box";
import "./App.css";
import rock from "./assets/imgs/rock.png";
import paper from "./assets/imgs/paper.png";
import scissors from "./assets/imgs/scissors1.jpg";

// ui를 바뀌게 하고싶다면 state를 만들어야한다.

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 버튼(가위, 바위, 보)
// 3. 버튼을 클릭시, 클릭한 값이 보인다.
// 4. 컴퓨터는 아이템이 랜덤하게 선택된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 결과에 따른 테두리 색상 변화 (승 - 초록, 패 - 빨강, 무승부 - 검정)

const choice = {
  rock: {
    name: "Rock",
    img: rock,
  },
  paper: {
    name: "PaPer",
    img: paper,
  },
  scissors: {
    name: "Scissors",
    img: scissors,
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div className="container">
      <div className="main">
        <Box title="User" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className="main">
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("paper")}>Paper</button>
        <button onClick={() => play("scissors")}>Scissors</button>
      </div>
    </div>
  );
}
// 🌟중요한거🌟
// <button onClick={play("rock")}>  => play("rock") 이렇게 하면 play()함수가 실행이된다.
// 그래서 실행이 안되게 콜백함수 형태로 함수를 전달해줘야한다 => <button onClick={() => play("rock")}>
// 이렇게하면 클릭도 안했는데 프린트되는 경우는 사라진다

// 🌟주의할거🌟
// onClick할때에는 함수를 호출하는 문장을 넣어주는게 아니라 함수를 콜백함수 형태로 넣어줘야한다.
// 함수를 전달하는 형식으로 넣어줘야 한다.

export default App;
