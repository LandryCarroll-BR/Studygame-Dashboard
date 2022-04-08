import React from "react";
import styles from "./Card.module.css";

import { useDispatch } from "react-redux";
import { setGame } from "../../features/gameSlice";

import EditIcon from "../../images/svg/EditIcon";
import PlayButtonIcon from "../../images/svg/PlayButtonIcon";

function Card({
  index,
  type,
  gameTitle,
  subTitle,
  statData,
  gameId,
  gameWords,
}) {
  const dispatch = useDispatch();
  const position = index * 5 + "%";
  const returnCard = () => {
    if (type === "game") {
      return (
        <div
          className={styles.gameCard}
          style={{ backgroundPositionX: position }}>
          <div className={styles.play}>
            <PlayButtonIcon />
            <span>Play</span>
          </div>
          <h3>{gameTitle}</h3>
          <h5>{subTitle} total words</h5>
          <div
            className={styles.edit}
            onClick={() => {
              dispatch(
                setGame({
                  gameId: gameId,
                  gameTitle: gameTitle,
                  gameWords: gameWords,
                })
              );
            }}>
            <span>Edit</span>
            <EditIcon />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.statsCard}>
          <span className={styles.statData}>{statData}</span>
          <h5 className={styles.stat}>{subTitle}</h5>
        </div>
      );
    }
  };

  return returnCard();
}

export default Card;
