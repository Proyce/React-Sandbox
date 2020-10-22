import React from "react";

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

const style = {
  color: "red"
};
//using if/else
const LuckyNumber4 = () => {
  const num = getNum();
  let msg;
  if (num === 10) {
    msg = (
      <div>
        <h1>Your lucky number is: {num} </h1>
        <h2 style={style}>"Congrats! Max Score"</h2>
      </div>
    );
  } else {
    msg = (
      <>
        <h1>Your lucky number is: {num} </h1>
        <p>Try again</p>
      </>
    );
  }
  return <>{msg}</>;
};

export default LuckyNumber4;
