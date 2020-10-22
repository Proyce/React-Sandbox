import React from "react";

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

const RandomNumber = () => {
  return (
    <>
      <h1> Your lucky number is {getNum()}</h1>
      {}
    </>
  );
};

export default RandomNumber;
