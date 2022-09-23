<template>
  <v-container>
    <!-- <loginAlert v-if="!currentUser"/> -->
    <sign-in v-if="!currentUser" />
    <v-form v-if="currentUser" ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            id="fName"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="lName"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="patId"
            :rules="idRules"
            :counter="10"
            label="Patient ID"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        id="devId"
        :counter="10"
        :rules="deviceRules"
        label="Device ID"
        required
      ></v-text-field>

      <v-text-field
        id="phone"
        :rules="phoneRules"
        label="Patient Phone Number"
        required
      ></v-text-field>

      <v-text-field
        id="email"
        :rules="emailRules"
        label="Patient E-mail"
        required
      ></v-text-field>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            id="emer1"
            :rules="phoneRules"
            label="Emergency Contact 1"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="emer2"
            :rules="phoneRules"
            label="Emergency Contact 2"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="emer3"
            :rules="phoneRules"
            label="Emergency Contact 3"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- <v-textarea v-model="email" :rules="emailRules" label="Patient Address" required></v-textarea> -->
      <v-select
        v-model="select"
        :items="doctors"
        :rules="[(v) => !!v || 'Item is required']"
        label="Doctors"
        required
      ></v-select>

      <!-- <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
            required></v-checkbox>-->

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validateAndSubmit"
        >Create Account</v-btn
      >

      <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
var config = {
  apiKey: 'AIzaSyB9ahJNsL4sfy4TVlc9jGymrkJPlbbJ0-w',
  authDomain: 'hospicare-app22.firebaseapp.com',
  databaseURL: 'https://hospicare-app22-default-rtdb.firebaseio.com',
}
var secondaryApp = initializeApp(config, 'Secondary')
var auth2 = getAuth(secondaryApp)

export default {
  data: () => ({
    valid: true,
    firstname: '',
    lastname: '',
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    deviceRules: [
      (v) => !!v || 'Device ID is required',
      (v) =>
        (v && v.length == 10) || 'Device ID must be equal to 10 characters',
    ],
    idRules: [
      (v) => !!v || 'Patient ID is required',
      (v) =>
        (v && v.length == 10) || 'Patient ID must be equal to 10 characters',
    ],
    phoneRules: [
      (v) => !!v || 'Phone No. is required',
      (v) =>
        (v && v.length == 10) || 'Phone No. must be equal to 10 characters',
    ],
    select: null,
    doctors: ['Doctor 1', 'Doctor 2', 'Doctor 3', 'Doctor 4'],
    checkbox: false,
  }),

  methods: {
    async validateAndSubmit() {
      this.$refs.form.validate()
      try {
        // await this.$fire.auth.createUserWithEmailAndPassword(
        await createUserWithEmailAndPassword(
          auth2,
          document.getElementById('email').value,
          'testtesttest'
        )
          .then(function (firebaseUser) {
            console.log('User ' + firebaseUser + ' created successfully!')
          })
          .then(async (data) => {
            await updateProfile(auth2.currentUser, {
              displayName:
                document.getElementById('lName').value +
                ' ' +
                document.getElementById('fName').value,
            })
            await this.$fire.database
              .ref(
                this.$fire.auth.currentUser.displayName +
                  '/patients/' +
                  auth2.currentUser.displayName
              )
              .set({
                fName: document.getElementById('fName').value,
                lName: document.getElementById('lName').value,
                id: document.getElementById('patId').value,
                devId: document.getElementById('devId').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                emergencyContacts: [
                  document.getElementById('email').value,
                  document.getElementById('emer1').value,
                  document.getElementById('emer2').value,
                ],
                doctorAssigned: document.getElementById('emer3').value,
              })
            //I don't know if the next statement is necessary
            auth2.signOut()
          })
          // .then(async data => { await auth2.setCustomUserClaims(auth2.currentUser.uid, { doctor: true }) })
          .catch((error) => {
            console.log(error)
          })
      } catch (e) {
        // console.log(document.getElementById("email").value)
        console.log(e)
        // handleError(e)
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.user
    },
  },
}
</script>