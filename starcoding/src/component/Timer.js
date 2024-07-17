import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 작동🚗");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료⛔");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. console 창을 보세요.</span>
    </div>
  );
};

export default Timer;
