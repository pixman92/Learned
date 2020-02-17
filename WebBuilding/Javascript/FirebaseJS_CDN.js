<!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js"></script>

<!-- Add Firebase products that you want to use -->
<script src="https://www.gstatic.com/firebasejs/7.8.2/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.8.2/firebase-firestore.js"></script>

<script src="config.js"></script>
<script>
    firebase.initializeApp(config);
    const db = firebase.firestore();

</script>
