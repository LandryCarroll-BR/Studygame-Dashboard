import React, { useState } from "react";
import styles from "./Login.module.css";

import { useDispatch } from "react-redux";

import logo from "../../images/svg/logo.svg";
import googleIcon from "../../images/svg/google.svg";
import { login } from "../../features/userSlice";

function Login() {
  const signIn = () => {
    dispatch(
      login({
        uid: "demo",
        photo:
          "https://lh4.ggpht.com/-CRxt5G6Mwz4/AAAAAAAAAAI/AAAAAAAAAAA/A0fAyx9NoYY/c0x00000000-cc-rp-mo/photo.jpg",
        email: "demo",
        displayName: "Demo_User",
      })
    );
  };

  const [guestName, setGuestName] = useState("");
  const [guestGameCode, setGuestGameCode] = useState("");

  const dispatch = useDispatch();

  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <h1 className={styles.title}>Sign In</h1>
        <h2 className={styles.subtitle}>
          Get started for the first time, or jump back into the action.
        </h2>
        <button className={styles.google} onClick={signIn}>
          <img src={googleIcon} alt="google icon" />
          <span>Sign in as a Guest</span>
        </button>
        <span className={styles.inputHeading}>
          Or enter nickname and code to join a game.
        </span>
        <input
          type="text"
          className={styles.nickname}
          value={guestName}
          placeholder="Nickname"
          maxLength="12"
          onChange={(e) => setGuestName(e.target.value)}
        />
        <input
          type="text"
          className={styles.gameCode}
          value={guestGameCode}
          placeholder="# Game code"
          onChange={(e) => setGuestGameCode(e.target.value)}
        />
        <div className={styles.joinContainer}>
          <button className={styles.join}>Join</button>
        </div>
      </div>

      <div className={styles.right}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Login;
