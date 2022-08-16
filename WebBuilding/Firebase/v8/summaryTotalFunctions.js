// scripts
<script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />

  <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

// auth website - https://firebase.google.com/docs/auth/web/start#web-version-8


// script for init
<script>
      const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    };
  // Initialize Firebase
    //   const app = initializeApp(firebaseConfig);
    var firebaseApp = firebase.initializeApp(firebaseConfig);

    db = firebaseApp.firestore();
</script>


// ========================================================
// helper functions

function adding(root, data){
    //function to add to Firebase, not based on UID or Email
    db.collection(root).add(data);
}

function addDoc(root, docMe, data){
    // function to push data to update data, based on UID
    db.collection(root).doc(docMe).set(data, {merge: true});
}

// ===========================
let savedArrayUID = []; let savedArrayEmails = [];
function emailPullHelper(emailSearch){
    savedArrayUID = []; savedArrayEmails = [];

    return db.collection('StatusBuddy').where('email', '==', emailSearch).get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                savedArrayUID.push(doc.id);
                savedArrayEmails.push(doc.data());
            });
            console.log('savedArrayUID', savedArrayUID);
            return savedArrayUID;
        });
}

let UIDFromResult="";
function pullUIDBasedOnEmail(emailSearch){
    //function that pulls UID that relates the corresponding Email
    emailPullHelper(emailSearch).then(async (results)=>{
        console.log('results', results);

        UIDFromResult = results[0];
        console.log('Result stored in \"UIDFromResult\"');
    });
}

// ===========================
let wholeDocDataPull = [];
function pullALLDataBasedOnUID(savedUIDstr){
    wholeDocDataPull = [];
    try{
        return db.collection('StatusBuddy').doc(savedUIDstr).get().then(doc => {
            console.log(doc.data());
            wholeDocDataPull.push(doc.data());
            // console.log('Saved to \'wholeDocDataPull\'', );
            console.log('wholeDocDataPull', wholeDocDataPull);
            return wholeDocDataPull;
        });
    }catch(err){
        console.log('err', err);
    }
}

// ========================================================

