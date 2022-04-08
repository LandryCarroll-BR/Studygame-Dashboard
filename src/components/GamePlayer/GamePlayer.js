import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectGame } from "../../features/gameSlice";
import { selectGuestGameStart } from "../../features/guestSlice";

function GamePlayer() {
  const game = useSelector(selectGame);
  const gameWords = useSelector(selectGame);
  const guestGameStart = useSelector(selectGuestGameStart);

  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    const getRandomIndex = () => {
      return Math.floor(Math.random() * gameWords.length);
    };

    const getWords = () => {
      let list = [];
      for (let i = 0; i <= 5; i++) {
        list.push(gameWords[getRandomIndex()]);
      }
      return list;
    };

    if (guestGameStart) {
      setRandomWords(getWords());
    }
  }, [gameWords, guestGameStart]);

  return (
    <div>
      <h1>{game.gameTitle}</h1>
      {randomWords.map((item) => {
        return <h4> </h4>;
      })}
      {randomWords.map((item) => {
        return <p> </p>;
      })}
    </div>
  );
}

export default GamePlayer;
