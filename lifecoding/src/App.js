import logo from "./logo.svg";
import "./App.css";

function Header() {
  // 사용자 정의 태그를 만들고 싶다면 함수를 정의하면 된다.
  // 사용자 정의태그는 대문자로 시작해야한다
  return (
    // 이 함수는 return값으로 html 코드를 return하면 된다
    <header>
      {/* home으로 이동하는 header영역 */}
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      {/* html, css, js와 같은 구체적인 글을 보는 페이지로 이동하는 영역 */}
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      {/* 본문을 표시하는 영역 */}
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
