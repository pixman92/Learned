
// these versions seem to work best, don't know why
<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-firestore.js"></script>

    const config = {
  
    };
    firebase.initializeApp(config);

    // firebase firestore
    const db = firebase.firestore();


    firebase.auth().signInAnonymously().catch(function(error) {

