import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태 정보가 들어간다.
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시들)
// 4. 도시버튼을 클릭할때마다 해당도시의 날씨가 보인다.
// 5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩스피너가 돈다.(로딩화면이 나온다)
// 7. 날씨상태에 따라 배경색이 변한다. ->  내가 추가할 기능

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = (lat, lon) => {
    let url =
      "http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div></div>;
}

export default App;
