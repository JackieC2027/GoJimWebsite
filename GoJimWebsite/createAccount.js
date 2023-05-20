import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut
    } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyC3Vuf4ma6wKrrphF7tbmd2ih0Qr28w2sM",
    authDomain: "gojim-26cbc.firebaseapp.com",
    databaseURL: "https://gojim-26cbc-default-rtdb.firebaseio.com",
    projectId: "gojim-26cbc",
    storageBucket: "gojim-26cbc.appspot.com",
    messagingSenderId: "491730952662",
    appId: "1:491730952662:web:2f430530eef2e0ebfbc477",
    measurementId: "G-C5KT1RZJYS"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase(app);

  const submit = document.getElementById('submit');
  
  submit.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var username = document.getElementById("username").value;
    var password = document.getElementById('password').value;
  
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(database, 'users/' + user.uid), {
                    email: email,
                    password: password,
                    username: username,
                    date: Date.now()
            })
            .then(() => {
            alert("Done!");
            })
            .catch((error) => {
                alert(error);
            });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
});