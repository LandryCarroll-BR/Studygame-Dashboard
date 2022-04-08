import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAP-0SygU-dNZWsM_fxPern2_vCepV-XHE",
  authDomain: "study-game-3d2ff.firebaseapp.com",
  projectId: "study-game-3d2ff",
  storageBucket: "study-game-3d2ff.appspot.com",
  messagingSenderId: "452153378683",
  appId: "1:452153378683:web:0f26530844708f5ca45fde",
  measurementId: "G-PNZHS4XPRL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;