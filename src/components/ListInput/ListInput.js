import React, { useState, useEffect } from 'react'
import styles from './ListInput.module.css'

import { useDispatch } from 'react-redux';
import { setGameWords } from '../../features/gameSlice';

import Textarea from 'react-expanding-textarea'

function ListInput({ index, save, placeholder, listLength}) {
  const dispatch = useDispatch();
  const [word, setWord] = useState();
  const [def, setDef] = useState();
  const [display, setDisplay] = useState("inherit");

  useEffect(() => {
    if (display==="inherit") {
      if(word && def) {
        dispatch(setGameWords({
        word: word,
        def: def,
        index: index
        }));
      } else {
        if (placeholder.word !== "word" && placeholder.def !== "def") {
          dispatch(setGameWords({
            word: placeholder.word,
            def: placeholder.def,
            index: index
          }))
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [save])
  
  return (
    <>
      <li
        className={styles.listItem}
        key={index}
        style={{display: display}}>
      <input
        value={word}
        className={styles.listInput}
        type="text"
        placeholder={placeholder.word}
        onChange={(e) => setWord(e.target.value)}/>
      <Textarea
        value={def}
        className={styles.listInput}
        style={{resize: "none"}}
        placeholder={placeholder.def}
        onChange={(e) => setDef(e.target.value)}></Textarea>
        <button
          id={index}
          className={styles.deleteInput}
          disabled={listLength===1}
          onClick={() => {
            setDisplay("none");
          }}>Remove</button>
        </li>
    </>
  )
}

export default ListInput
