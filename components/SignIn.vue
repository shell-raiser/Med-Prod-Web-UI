<template>
  <div>
    <h1>Login</h1>
    <v-form>
      <v-text-field
        placeholder="example@example.com"
        label="Id"
        type="text"
        id="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        id="password"
      ></v-text-field>
      <v-btn @click="signIn">Sign In</v-btn>
    </v-form>
  </div>
</template>
  
<script>
// import firebase from 'firebase/app'
// import 'firebaseui/dist/firebaseui.css'
// import firebaseui from 'firebaseui'

export default {
  methods: {
    async signIn() {
      try {
        // await this.$fire.auth.createUserWithEmailAndPassword(
        await this.$fire.auth
          .signInWithEmailAndPassword(
            document.getElementById('email').value,
            document.getElementById('password').value
          )
          .then((firebaseUser) => {
            console.log('User ' + firebaseUser + ' created successfully!')
            // this.$store.state.user = this.$fire.auth.currentUser
          })
      } catch (e) {
        // console.log(document.getElementById("email").value)
        console.log(e)
        // handleError(e)
      }
    },
  },
  // mounted() {

  //     const firebaseui = require('firebaseui')
  //     require("firebaseui/dist/firebaseui.css")
  //     // https://github.com/firebase/firebaseui-web/issues/216
  //     // for below version 7
  //     // const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fireAuth)
  //     // for version 7 and above
  //     const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fire.auth)

  //     const config = {
  //         signInOptions: [
  //             // firebase.auth.GoogleAuthProvider.PROVIDER_ID
  //             // this.$fireAuthObj.GoogleAuthProvider.PROVIDER_ID
  //             // this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID
  //             this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID
  //         ],
  //         signInSuccessUrl: '/',
  //         // tosUrl: '/tos',
  //         // privacyPolicyUrl: '/privacy',
  //         callbacks: {
  //             signInSuccessWithAuthResult() {
  //                 console.log()
  //                 console.log('signInSuccessWithAuthResult')
  //             },
  //             uiShown: function () {
  //                 console.log('uiShown')
  //             }
  //         }
  //     }

  //     ui.start('#firebaseui-auth-container', config)
  // }
}
</script>