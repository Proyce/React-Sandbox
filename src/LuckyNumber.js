import React from "react";

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

const LuckyNumber = () => {
  const num = getNum();
  return (
    <>
      <h1> Your lucky number is {num}</h1>
      <p>{num === 10 ? "Congrats! Max Score" : "Try harder"}</p>
    </>
  );
};

export default LuckyNumber;
