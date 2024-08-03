// import { createBrowserRouter } from "react-router-dom";
//  // => react-router-dom이라는 모듈에서 createBrowserRouter라는 컴포넌트(함수)를 가져오고 있다.

// const root = createBrowserRouter([
// ]);
//  // => root는 변수다 -> createBrowserRouter함수를 실행한 결과값을 담고 있는 const변수다
//  // => createBrowserRouter 함수는 배열형식으로 입력값을 받고 있다.

//-------👇🏻기본path(url)에 MainPage 컴포넌트를 연결👇🏻---------------------

// import { createBrowserRouter } from "react-router-dom";
// import MainPage from "../pages/MainPage";

// const root = createBrowserRouter([
//   {
//     path: "",
//     element: <MainPage />,
//   },
// ]);

// export default root;

//-------👇🏻 lazy함수를 사용하고 suspense 태그 사용👇🏻---------------------

import { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));

const About = lazy(() => import("../pages/AboutPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
]);

export default root;
