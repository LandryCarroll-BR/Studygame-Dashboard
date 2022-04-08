import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

import db from '../../util/firebase';

import Card from '../Card/Card';
import NewGameButton from '../NewGameButton/NewGameButton';

function Home() {
  const user = useSelector(selectUser);
  const [games, setGames] = useState([]);

  const firstName = () => {
    let fullname = user.displayName;
    let array = fullname.split(' ');
    return array.shift();
  };

  useEffect(() => {
      setGames([])
      db.collection("users")
        .doc(user.uid)
        .collection("games")
        .orderBy("gameTitle", "asc")
        .onSnapshot((snapshot) => setGames(snapshot.docs.map((doc) => doc.data())));
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className={styles.home}>
      <h1>Welcome back, {firstName()}.</h1>
      <h2 className={styles.subTitle}>Create a new game, or edit an existing game below</h2>

      <h2 className={styles.subHeading}>All Games</h2>
      <section className={styles.cardContainer}>

        <NewGameButton />
        {games.map((item) => {
          const index = games.indexOf(item);
          return (
            <Card 
              index={index}
              type="game"
              gameTitle={item.gameTitle}
              subTitle={item.gameWords.length}
              gameId={item.gameId}
              gameWords={item.gameWords}/>
          )
        })}
      </section>

      <h2 className={styles.subHeading}>Game Stats</h2>
      <section className={styles.cardContainer}>
      
        <Card type="stat" subTitle="Total games played" statData="8" />
        <Card type="stat" subTitle="Total points earned" statData="1321" />
        <Card type="stat" subTitle="Highest score (last game)" statData="Jacob M." />

      </section>
      
    </div>
  )
}

export default Home;
