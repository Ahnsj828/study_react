import "./App.css";
import Box from "./component/Box";

function App() {
  return (
    <div>
      <Box num={1} name="아메리카노" />
      <Box num={2} name="토마토절임" />
      <Box num={3} name="파니니" />
    </div>
  );
}

export default App;
