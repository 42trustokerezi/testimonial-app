import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA4PKTZsy3MyFWVJnAe97bYC8rH7UsO_eU",
    authDomain: "test-80664.firebaseapp.com",
    projectId: "test-80664",
    storageBucket: "test-80664.appspot.com",
    messagingSenderId: "299631617009",
    appId: "1:299631617009:web:c5ea954811946bc4f7da50",
    measurementId: "G-2YJ1Q7Y343"
  };
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
  export default storage;