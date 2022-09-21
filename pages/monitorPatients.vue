<template>
  <v-container>
    <h1>All Patients</h1>
    <!-- <p>{{ allPatients }}</p> -->
    <v-container
      v-for="(patient, index) in allPatients"
      :key="patient"
      style="padding: 10px"
    >
      <v-card style="padding: 20px">
        <v-row class="justify-space-around">
          <span>{{ index }}</span>
          <span>{{ patient[0][0] }}</span>
          <span>{{ patient[0][1] }}</span>
          <span>{{ patient[0][2] }}</span>
          <span>{{ patient[0][3] }}</span>
        </v-row>
      </v-card>
    </v-container>
    
    <!-- <personCard /> -->
  </v-container>
</template>
<script>
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
import PersonCard from '~/components/personCard.vue'

var config = {
  apiKey: 'AIzaSyB9ahJNsL4sfy4TVlc9jGymrkJPlbbJ0-w',
  authDomain: 'hospicare-app22.firebaseapp.com',
  databaseURL: 'https://hospicare-app22-default-rtdb.firebaseio.com',
}
var secondaryApp = initializeApp(config, 'Secondary')

export default {
  data() {
    return {
      allPatients: {},
    }
  },
  mounted() {
    try {
      const db = getDatabase()
      const starCountRef = ref(
        db,
        this.$fire.auth.currentUser.displayName + '/logs'
      )
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        this.allPatients = data
        console.log(allPatients)
      })
    } catch (e) {
      console.log(e)
    }
  },
}
</script>