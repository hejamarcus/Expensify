import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBo2FyrSVZnChjKFlPHUoP1HC1CnzeMUXw",
    authDomain: "expensifybymarcus.firebaseapp.com",
    databaseURL: "https://expensifybymarcus.firebaseio.com",
    projectId: "expensifybymarcus",
    storageBucket: "expensifybymarcus.appspot.com",
    messagingSenderId: "277342894265",
    appId: "1:277342894265:web:530f887932a70b35178368"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

