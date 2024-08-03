// import { createBrowserRouter } from "react-router-dom";

// import MainPage from "../pages/MainPage";

// const root = createBrowserRouter([
//   {
//     path: "",
//     element: <MainPage />,
//   },
// ]);

// export default root;

// lazy함수를 사용하고 suspense 태그 사용

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
