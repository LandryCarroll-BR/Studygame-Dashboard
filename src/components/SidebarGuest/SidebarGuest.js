import React, { useState, useEffect } from "react";
import styles from "./SidebarGuest.module.css";

import { useSelector, useDispatch } from "react-redux";
import { selectGuest, setGuestGameStart } from "../../features/guestSlice";

import TimerIcon from "../../images/svg/TimerIcon";

function SidebarGuest() {
  const dispatch = useDispatch();
  const guest = useSelector(selectGuest);
  const [timer, setTimer] = useState({
    start: false,
    time: 0,
  });

  useEffect(() => {
    if (timer.start || guest.guestGameStart) {
      const start = Date.now();
      setInterval(() => {
        setTimer({ start: true, time: Date.now() - start });
      }, 100);
    }
  }, [timer.start, guest.guestGameStart]);

  let centiseconds = ("0" + (Math.floor(timer.time / 10) % 100)).slice(-2);
  let seconds = ("0" + Math.floor(timer.time / 1000)).slice(-2);
  // let minutes = ("0" + (Math.floor(timer.time / 60000) % 60)).slice(-2);

  const getCentiseconds = () => {
    if (centiseconds >= 0) {
      return centiseconds;
    } else return "00";
  };

  const getSeconds = () => {
    if (seconds >= 0) {
      return seconds;
    } else return "00";
  };

  return (
    <>
      <div className={styles.guestData}>
        <h2>{guest.guestName}</h2>
        <h2>
          <TimerIcon />
          <span>
            {getSeconds()}.{getCentiseconds()}s
          </span>
        </h2>
      </div>

      <button
        className={styles.start}
        disabled={timer.start}
        onClick={() => {
          dispatch(setGuestGameStart(true));
          setTimer({
            start: true,
          });
        }}>
        Start
      </button>
    </>
  );
}

export default SidebarGuest;
