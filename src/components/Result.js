import React from "react";

function Result({ drink, compatible, description, drinkImage, compatibleImage, restartQuiz }) {
  return (
    <div>
      <h2>Your Drink: {drink}</h2>
      <img src={drinkImage} alt={drink} />
      <p>{description}</p>

      <h2>Compatible Drink: {compatible}</h2>
      <img src={compatibleImage} alt={compatible} />
      <p>You and {compatible} would get along great too!</p>

      <button onClick={restartQuiz}>Take the Quiz Again</button>
    </div>
  );
}

export default Result;
