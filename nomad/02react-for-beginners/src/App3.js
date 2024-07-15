import { useState, useEffect } from "react";

function Hello() {
  // useEffect(() => {
  //   console.log("created :)")
  //   return() => console.log("destroyed :(")
  // }, [])

  // 👇

  // const byFn = () => {
  //   console.log("destroyed :(")
  // }
  // const hiFn = () => {
  //   console.log("created :)")
  //   return byFn
  // }
  // useEffect(hiFn, [])
  // return <h1>Hello</h1>

  // 👇
  // useEffect(() => {
  //   console.log("hi :)");
  //   return () => console.log("bye :(")
  // })

  // or

  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(")
}
  }, [])
  return <h1>Hello</h1>
}

function App3() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello/> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}
    </button>
    </div>
  );
}

export default App3;
