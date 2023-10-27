 <div id="loginPage">
    <script>
      var ui = new firebaseui.auth.AuthUI(firebase.auth());

      // FirebaseUI configuration
      var uiConfig = {
        signInSuccessUrl: '/welcome', // Redirect URL after successful sign-in
        signInOptions: [
          // Google Sign-In
          {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // Additional Google sign-in options can be configured here.
          },
          // Facebook Sign-In
          {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: ['public_profile', 'email'], // Request additional permissions
          },
          // Twitter Sign-In
          {
            provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          },
          // Email/Password Sign-In
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
      };

      // Start the FirebaseUI widget using the FirebaseUI config
      ui.start('#firebaseui-auth-container', uiConfig);

    </script>
<div id="firebaseui-auth-container"></div>

  </div>
