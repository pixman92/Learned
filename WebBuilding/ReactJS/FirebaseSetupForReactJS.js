<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyAddME4QywwWHka5z6r2n86Wf04QOU5X2Q",
  authDomain: "statusbuddy-7ef72.firebaseapp.com",
  projectId: "statusbuddy-7ef72",
  storageBucket: "statusbuddy-7ef72.appspot.com",
  messagingSenderId: "292474724803",
  appId: "1:292474724803:web:b90c52e28010abe73f1d76"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const db = firebase.firestore();

// console.log(db);

function getData() {
  db.collection("StatusBuddy")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });
}


// ====================
const DashBoard = () => {
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <MainSelect />
    </div>
  );
};
