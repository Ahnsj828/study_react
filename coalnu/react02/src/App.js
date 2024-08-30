import { useState } from "react";
import "./App.css";

function App() {
  let counter = 0;

  const [counter2, setCounter2] = useState(0);
  // useState라는 함수를 통해 state를 만든다
  // 이 함수(useState)는 리액트에서 제공해준다.
  // 리액트에서 제공해주는 유용한 함수들을 react hook이라 부른다.
  // hook은 리액트할때 필요한 유용한 함수들이다

  // useState(0) => 매개변수(0)를 받는다
  // 매개변수란 뭘까? 초기값이다! / 변수에도 초기값 넣듯 얘도 초기값이 필요하다.

  // useState(0) 이 함수는 array([counter2, setCounter2])를 반환한다. => 두가지 배
  // array안에는 두가지 값이 있다. [초기값이 담긴 state, state값을 변경해주는 함수]

  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1); // setCounter2 이거는 비동기적으로 작동한다.
    // 변수는 값을 바꾸면 바로 적용이 되지만 (변수는 공개적으로 작동된다. 비용이 들게 없다.)
    // 그런데 state 바꾸는건 비용이 든다.
    // 그래서 state 바꾸는 함수가 바로 실행되는게 아니라 setCounter2 함수가 끝날때까지 기다렸다가 state 바꾸는 함수들을 모아서 한번에 실행한다.

    console.log("counter: ", counter, "counter2: ", counter2);
    // 그래서 여기서 counter 값이 바뀌지 않는다. => 왜냐? 비동기적으로 작동하기 때문에(counter는 동기적으로 작동한다.)
    // counter가 계속 1인 이유 => setState로 state값을 바꾸는 순간 리랜더링된다.
    // 리린더링된다 => 컴포넌트를 다시 실행한다는거다. => 처음부터 다시 실행되면서 0으로 초기화 시킨다. => counter를 0으로 초기와 시킨다.
    // state값은 리액트가 주시하고 있는 값이다. 그래서 . 그 전의 값을 기억하고 있다가 바꾼다. / 근데 변수는 리액트가 주시하지 않는다

    // 컴포넌트가 리랜더링 되면 변수의 값이 다시 초기화된다.

    // 1. 유저가 increase 버튼을 클릭한다.
    // 2. counter + 1해서 1이된다
    // 3. setState함수 호출
    // 4. console.log 실행된다.
    // 변수값은 1로 보이고 state값은 아직 안 변했기 때문에 그 전에 값이 보인다.
    // 함수 끝
    // app이 re render된다.
    // let counter = 0 을 거치면서 counter값은 다시 0으로 초기화된다
    // 업데이트 된 state 값이 보인다.
    // 🌟 변수는 re render 될 때마다 초기화가 된다. state값은 비동기적으로 처리된다.
  };
  return (
    <div>
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default App;
