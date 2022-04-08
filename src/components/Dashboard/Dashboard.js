import React from 'react';
import styles from './Dashboard.module.css';

import { useSelector } from 'react-redux';
import { selectGameTitle } from '../../features/gameSlice';

import Home from '../Home/Home';
import GameBuilder from '../GameBuilder/GameBuilder';
import GamePlayer from '../GamePlayer/GamePlayer';

function Dashboard({ guestName }) {
  const gameTitle = useSelector(selectGameTitle);

  const toggleScreenMode = () => {
    if (gameTitle && !guestName) {
      return <GameBuilder />;
    }
    if (guestName) {
      return <GamePlayer />;
    }
    return <Home />;
  }

  return (
    <main className={styles.dashboard}>
      {toggleScreenMode()}
    </main>
  )
}

export default Dashboard
