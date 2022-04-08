import React from "react";
import styles from "./SidebarUser.module.css";

import { clearGame } from "../../features/gameSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

import DashboardIcon from "../../images/svg/DashboardIcon";
import ScoresIcon from "../../images/svg/ScoresIcon";
import SettingsIcon from "../../images/svg/SettingsIcon";

function SidebarUser() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <ul className={styles.list}>
        <li
          className={styles.listItem}
          onClick={() => {
            dispatch(clearGame());
          }}>
          <DashboardIcon />
          <span className={styles.listText}>Dashboard</span>
        </li>

        <li className={styles.listItem}>
          <ScoresIcon />
          <span className={styles.listText}>Scores</span>
        </li>

        <li className={styles.listItem}>
          <SettingsIcon />
          <span className={styles.listText}>Settings</span>
        </li>
      </ul>

      <div
        className={styles.userPhotoContainer}
        onClick={() => {
          dispatch(logout());
        }}>
        <img className={styles.userPhoto} src={user.photo} alt="user" />
        <h4>sign out</h4>
      </div>
    </>
  );
}

export default SidebarUser;
