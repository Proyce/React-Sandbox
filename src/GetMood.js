import React from "react";

function getMood() {
  const moods = [
    "Happy",
    "Sad",
    "Joyful",
    "Angry",
    "Hungry",
    "High",
    "Down",
    "Lonely",
    "Cheerful",
    "Tensed",
    "Romantic",
    "Whimsical",
    "Idyllic",
    "Melancholy",
    "Humorous",
    "Gloomy",
    "Reflective"
  ];
  return moods[Math.floor(Math.random() * moods.length)];
}

const GetMood = () => {
  return (
    <>
      <h1>
        My current mood is:{" "}
        <b>
          <u>{getMood()}</u>
        </b>
        .
      </h1>
    </>
  );
};

export default GetMood;
