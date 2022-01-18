//how to import Firebase v8 
//into web app

// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js" defer></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js" defer></script>

const firebaseConfig = {
// 	...	
};

window.onload = ()=>{ 
      init(); 
	
      collectionName = 'flashCards'; 
}; 
var db; 
function init(){ 
    var firebaseApp = firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore(); 
}
// =================

const firebase = {
	// config file from firebase
};
var db = firebase.firestore();



// =================OLD=================
const firebaseApp = firebase.initializeApp(firebaseConfig);

// for database
const db = firebaseApp.firestore();
// for file uploading
const storage = firebase.storage();
// for authentication
const auth = firebase.auth();
// for google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
