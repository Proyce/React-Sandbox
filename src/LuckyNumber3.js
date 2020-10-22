import React from "react";

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

const style = {
  color: "red"
};
//using the short-circuit operator
const LuckyNumber3 = () => {
  const num = getNum();
  return (
    <>
      <h1> Your lucky number is {num}</h1>
      <p>{num === 10 && <h1 style={style}>"Congrats! Max Score"</h1>}</p>
    </>
  );
};

export default LuckyNumber3;
