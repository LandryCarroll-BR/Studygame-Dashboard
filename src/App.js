import React, { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { selectGuestName} from './features/guestSlice';
import db, { auth } from './util/firebase';

import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const guestName = useSelector(selectGuestName);
  const getMainElements = () => {
    if (user || guestName) {
      return (
        <>
          <Sidebar />
          <Dashboard guestName={guestName}/>
        </>
      )
    }
    return <Login />
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }));
        db.collection("users").doc(authUser.uid).set({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        });
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      { getMainElements() }
    </div>
  );
}

export default App;
