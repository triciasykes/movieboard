import * as firebase from 'firebase'

var config = {
   apiKey: "AIzaSyDK2X5S1FFLvAWZTMLNRiLOg0oH-5jrgSE",
   authDomain: "photowall-c3068.firebaseapp.com",
   databaseURL: "https://photowall-c3068.firebaseio.com",
   projectId: "photowall-c3068",
   storageBucket: "photowall-c3068.appspot.com",
   messagingSenderId: "932306781628"
 };
 firebase.initializeApp(config);

 const database = firebase.database()

 export {database}
