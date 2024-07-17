// < useEffect >
// 어떤 컴포넌트가 Mount(화면에 첫 렌더링) 되었을 때, Update(다시 랜더링) 될 때, Unmount(마운트해제/ 화면에서 사라질때) 되었을 때 특정작업을 처리할 코드를 실행시켜 주고싶다면 사용

// 1.useEffect의 인자로 하나의 콜백함수를 받는 형태
//   => 렌더링이 될때 마다 콜백이 실행
//    => 컴포넌트가 맨 처음 화면에 렌더링이 될때 그리고 컴포넌트가 다시 랜더렝될때 실행
// useEffect(() => {
//   // 작업
// });

// 2. useEffect의 첫번째 인자로 콜백함수, 두번재 인자로 배열(Dependency array)을 받는 형태
//    => 화면에 맨 처음 렌더링 될 때 실행 / value값이 바뀔때 실행 (매번 렌더링이 될 때마다 실행되는게 아니라)
//     => 만약 빈 배열을 전달해 준다면 컴포넌트가 맨처음 화면 랜더링 될때만 실행이될거다
// useEffect(() => {
//   // 작업
// }, [value]);

// 3. clean up

// import React, { useState, useEffect } from "react";

const App2 = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 랜더링마다 매번 실행됨 - 렌더링 이후
  useEffect(() => {
    console.log("렌더링✨");
  });

  // 마운트 + count가 변화할때마다 실행
  useEffect(() => {
    console.log("count 변화📈");
  }, [count]);

  // 마운트 + name이 변경될때마다 실행
  useEffect(() => {
    console.log("name의 변화🎈");
  }, [name]);

  // 가장 처음에 렌더링될 때만 실행
  useEffect(() => {
    console.log("마운팅🏞");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <br />
      <span>name: {name}</span>
    </div>
  );
};

export default App2;
