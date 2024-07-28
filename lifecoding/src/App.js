import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        {/* home으로 이동하는 header영역 */}
        <h1>
          <a href="/">WEB</a>
        </h1>
      </header>
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
      <article>
        {/* 본문을 표시하는 영역 */}
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
