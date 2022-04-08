import React from 'react';
import styles from './NewGameButton.module.css';

import { useDispatch } from 'react-redux';
import { setGame } from '../../features/gameSlice';

function NewGameButton() {

  const dispatch = useDispatch();

  const createGame = () => {
    dispatch(setGame({
      gameTitle: "New Game",
      gameId: "#" + Math.floor(Math.random() * 1000000),
      gameWords: [{
        word: "word",
        def: "definition"
      }]
    }));
  }

  return (
    <button className={styles.newGame} onClick={createGame}>
      <span>Create New Game + </span>
    </button>
  )
}

export default NewGameButton
