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
    name: "Paper",
    img: paper,
  },
  scissors: {
    name: "Scissors",
    img: scissors,
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    setResult(judgement(choice[userChoice], comChoice));
  };

  const judgement = (user, com) => {
    // console.log("user: ", user, "com: ", com);

    // 가위바위보 로직에 대해 생각해보기
    // user == com => tie
    // user == rock,      com == scissors   =>  user win
    // user == rock,      com == paper      =>  user lose
    // user == paper,     com == rock       =>  user win
    // user == paper,     com == scissors   =>  user lose
    // user == scissors,  com == paper      =>  user win
    // user == scissors,  com == rock       =>  user lose

    // 객체끼리 비교할 수 없으니 name을 갖고 비교할거다
    if (user.name == com.name) {
      return "tie";
    } else if (user.name == "Rock")
      // {
      //   if (com.name == "Scissors") {
      //     return "Win";
      //   } else {
      //     return "Lose";
      //   }
      // }

      // 삼항 연산식으로 바꾸기(코드 간편화를 위해)
      return com.name == "Scissors" ? "Win" : "Lose";
    else if (user.name == "Paper") return com.name == "Rock" ? "Win" : "Lose";
    else if (user.name == "Scissors")
      return com.name == "Paper" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // Object.keys() 이 함수는 뭐냐? => 객체에 key값만 뽑아서 array로 만들어 주는  함수다.
    // console.log("itemArray: ", itemArray);

    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log("randomItem:", randomItem);

    let final = itemArray[randomItem];
    // console.log(final);
    return choice[final];
  };

  return (
    <div className="container">
      <div className="main">
        <Box title="User" item={userSelect} result={result} />
        <Box title="Computer" item={comSelect} result={result} />
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
