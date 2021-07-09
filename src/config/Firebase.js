import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    // apiKey: "AIzaSyCFPK01XcrMy8j1hO4Gg_S-jWe2SCeE4NE",
    // authDomain: "newchat-622a3.firebaseapp.com",
    // databaseURL: "https://newchat-622a3.firebaseio.com",
    // projectId: "newchat-622a3",
    // storageBucket: "newchat-622a3.appspot.com",
    // messagingSenderId: "65370138070",
    // appId: "1:65370138070:web:1f14d9cdc97e15390cf077"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);