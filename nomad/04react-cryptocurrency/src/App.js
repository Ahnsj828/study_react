import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // json data 이름을 coins라고 했다
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      // 이 URL을 fetch 시키기
      // 개발자모드에 네트워크에 들어가면 => tickers를 클릭해보면 request가 일어난걸 확인 할 수 있다. preview에 들어가보면 많은 코인 정보가 있는걸 확인할 수 있다.
      .then((response) => response.json())
      // 이 response로 부터 이 json을 추출하기 위해 fetch에 추가로 해야할 것은 then을 쓰고 response를 받아서 response.json을 return
      .then((json) => {
        // 그 json을 가지고 console.log(json)을 하면 다량의 코인 정보가 나온다. 엄천 큰 array다
        // json data를 state에 넣으면 된다

        setCoins(json);
        // json(즉 coins)를 얻었을 때 json의 값을 setCoins해줄거라서
        setLoading(false);
        // 이와 동시에 coins 얻기를 끝냈다면 loading을 false로 바꿔줘야해서
      });
  }, []);
  // [] => 아무것도 주시하지 않을거라서 => 아무것도 주시하고 있지 않으면(빈배열이면) 이 코드는 한번만 작동한다
  return (
    <div>
      {/* <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul> */}

      {/* 👇 */}

      {/* <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select> */}

      {/* 👇 */}

      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
