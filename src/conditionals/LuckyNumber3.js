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
      <h1>{num === 10 && <h2 style={style}>"Congrats! Max Score"</h2>}</h1>
    </>
  );
};

export default LuckyNumber3;
