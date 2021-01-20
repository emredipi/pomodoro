import firebase from 'firebase/app'
import 'firebase/database'
import config from "./config.json";
export const rtdb = firebase
.initializeApp(config)
.database()
