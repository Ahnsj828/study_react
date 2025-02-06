import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태 정보가 들어간다.
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시들)
// 4. 도시버튼을 클릭할때마다 해당도시의 날씨가 보인다.
// 5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩스피너가 돈다.(로딩화면이 나온다)
// 7. 날씨상태에 따라 배경색이 변한다. ->  내가 추가할 기능

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["paris", "london", "new york", "tokyo", "seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      // console.log(process.env.REACT_APP_OPENWEATHERMAP_API_KEY);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data", data);

    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="container">
      <WeatherBox weather={weather} />
      <WeatherButton cities={cities} />
    </div>
  );
}

export default App;
