import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          text="Text"
          placeholder="Write you to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
