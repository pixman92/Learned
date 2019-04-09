//code that writes to firebase, realtime database
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }