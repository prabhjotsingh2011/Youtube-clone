import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {

    apiKey: "AIzaSyCGIvUwtq5uHiMIv99R0Nq-kQ-qeMXOLaQ",
    authDomain: "yt-klon.firebaseapp.com",
    projectId: "yt-klon",
    storageBucket: "yt-klon.appspot.com",
    messagingSenderId: "617053570824",
    appId: "1:617053570824:web:33eb1ce387640ec5d70ebd"
  };

  firebase.initializeApp(firebaseConfig)


  export default firebase.auth()
