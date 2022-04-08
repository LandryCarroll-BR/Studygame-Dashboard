import React from "react";
import styles from "./Sidebar.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectGuestName } from "../../features/guestSlice";

import SidebarGuest from "../SidebarGuest/SidebarGuest";
import SidebarUser from "../SibebarUser/SidebarUser";

function SideBar() {
  const user = useSelector(selectUser);
  const guestName = useSelector(selectGuestName);
  const toggleSideBar = () => {
    if (user) {
      return <SidebarUser />;
    } else if (guestName) {
      return <SidebarGuest />;
    }
  };

  return <aside className={styles.sidebar}>{toggleSideBar()}</aside>;
}

export default SideBar;
