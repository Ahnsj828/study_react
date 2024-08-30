import React from "react";

const Box = (props) => {
  console.log("props: ", props);
  return (
    <div className="box">
      모치플레지르{props.num}
      <p>{props.name}</p>
    </div>
  );
};

export default Box;
