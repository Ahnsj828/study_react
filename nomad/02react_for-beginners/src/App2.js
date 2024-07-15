import { useState, useEffect } from "react";

function App2() {
  const [counter, setValue] = useState(0);
  // 첫번째 value, 두번째 그 value를 modify하는 function
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue(prev => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)
  useEffect(() => {
    console.log("I run only once.")
  }, [])
  useEffect(() => {
      console.log("I run when 'keyword' changes.")
  }, [keyword])
  useEffect(() => {
      console.log("I run when 'counter' changes.")
  }, [counter])
  useEffect(() => {
    console.log("I run when 'keyword' & 'counter' change.")
  }, [keyword, counter])

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="See here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App2;
