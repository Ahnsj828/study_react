import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  // Header에 첫번째 파라미터로 props라고 이름을 붙였다(아무거나 적어도 되지만 가장 대중적인걸로)
  // console.log("props", props);
  console.log("props", props, props.title);
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
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
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div>
      <Header title="React"></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
