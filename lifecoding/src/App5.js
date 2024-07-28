import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  // Header에 첫번째 파라미터로 props라고 이름을 붙였다(아무거나 적어도 되지만 가장 대중적인걸로)
  // console.log("props", props);
  // console.log("props", props, props.title);
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        {/* 이 값은 고유해야된다 / 애플리케이션 전체가 아니라 이 반복문안에서 고유해야된다는 거다. */}
        <a href={`/read` + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    // li정보들이 여러개니까 배열에 담은거다 / 그리고 각각의 정보는 제목과 본문이 있다. / 그리고 각자의 id값이 있을거다 => 이런 정보는 객체에 담는다
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "js", body: "js is..." },
  ];

  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}>
        {/* topics={topics}  =>  topics를 Nav의 prop으로 전달 
          topics="topics" =>  이렇게 하면 단순한 문자열이 전달된다.
          그래서 있는 그대로의 데이터로 전달하기 위해 => {topics}
        */}
      </Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
