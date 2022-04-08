import React, { useState, useEffect } from 'react';
import styles from './GameBuilder.module.css';

import db  from '../../util/firebase';

import { useDispatch, useSelector,  } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import {selectGameTitle, selectGameId, selectGameWords, clearGameWords, clearGame} from '../../features/gameSlice';

import ListInput from '../ListInput/ListInput'
import PlayButtonIcon from '../../images/svg/PlayButtonIcon';
import DeleteIcon from '../../images/svg/DeleteIcon';

function GameBuilder() {
  const gameTitle = useSelector(selectGameTitle);
  const gameId = useSelector(selectGameId);
  const gameWords = useSelector(selectGameWords);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [save, setSave] = useState(false);
  const [gameTitleCopy, setGameTitleCopy] = useState(gameTitle);
  const [gameWordsCopy, setGameWordsCopy] = useState(gameWords);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (gameWords.length > 1) {
      db.collection("users").doc(user.uid).collection("games").doc(gameId).set({
        gameTitle: gameTitleCopy,
        gameId: gameId,
        gameWords: gameWords,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameWords])
 
  return (
    <div className={styles.gameBuilder}>

      <div className={styles.titlesContainer}>
        <input
          value={gameTitleCopy}
          className={styles.gameTitle}
          type="text"
          placeholder={gameTitle} 
          onChange={(e) => {setGameTitleCopy(e.target.value)}}
          />
        <h1><span className={styles.gameCode}>{gameId}</span></h1>
        <button
        className={styles.deleteButton}
          onClick={() => {
          db.collection("users").doc(user.uid).collection("games").doc(gameId).delete();
          dispatch(clearGame());
        }}><DeleteIcon /></button>
      </div>
      

      <h2 className={styles.subTitle}>Create a new game using the interactive form below</h2>

      <div className={styles.border}></div>

      <div className={styles.matchingGroupListTitles}>
        <h2 className={styles.subHeading}>Word Groups:</h2>
        <button 
          className={styles.addRow}
          onClick={()=> setGameWordsCopy([...gameWordsCopy, {
            word: "word",
            def: "definition"
          }])}>Add Row</button>
      </div>

      <ul className={styles.wordGroupsList}>
        {gameWordsCopy.map((item) => {
          const index = gameWordsCopy.indexOf(item);
          return (
            <ListInput
              save={save}
              index={index}
              listLength={gameWordsCopy.length}
              placeholder={{
                word: item.word,
                def: item.def
              }}/>
          )
        })}
      </ul>

      <div className={styles.buttonRow}>
        <button
          className={styles.save}
          onClick={() => {
            dispatch(clearGameWords());
            setSave(!save);
            setDisplay("block");
            setTimeout(() => {
              setDisplay("none");
            }, 1000);
          }}>Save</button>
        <button className={styles.play}>Play<PlayButtonIcon/></button>
      </div>

      <h4 className={styles.saved} style={{display: display}}>Saved!</h4>

    </div>
  )
}

export default GameBuilder;
