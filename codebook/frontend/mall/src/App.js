import { RouterProvider } from "react-router-dom";
// RouterProvider도 컴포넌트다.
import root from "./router/root";

function App() {
  // => App() -> App함수의 입력값은 없다.
  return <RouterProvider router={root} />;
  // => RouterProvider 함수 컴포넌트 호출 함으로써 실행하고 그 결과값을 return하고 있다.
  // => RouterProvider 함수 컴포넌트는 root를 props로 받고있다. = 입력값을 받고 있다.
}

export default App;
