import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBj9bsuy24QnAkuOoIjFrgHHBGHfjLfXFA",
    authDomain: "hotel-management-app-reactjs.firebaseapp.com",
    projectId: "hotel-management-app-reactjs",
    storageBucket: "hotel-management-app-reactjs.appspot.com",
    messagingSenderId: "24603154843",
    appId: "1:24603154843:web:330db9dd203bc63946e93e"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);