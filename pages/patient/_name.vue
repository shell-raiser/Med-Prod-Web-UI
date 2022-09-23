<template>
  <v-container
    >
    <!-- {{ this.allLogs }} -->

    <v-container
      v-for="index in this.allLogs"
      :key="index"
      style="padding: 20px"
    >
      <v-card>
        <v-row class="justify-space-around">
          <span>{{ index[0] }}</span>
          <span>{{ index[1] }}</span>
          <span>{{ index[2] }}</span>
          <span>{{ index[3] }}</span>
          <span>{{ index[4] }}</span>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>
<script>
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
// import PersonCard from '~/components/personCard.vue'

var config = {
  apiKey: 'AIzaSyB9ahJNsL4sfy4TVlc9jGymrkJPlbbJ0-w',
  authDomain: 'hospicare-app22.firebaseapp.com',
  databaseURL: 'https://hospicare-app22-default-rtdb.firebaseio.com',
}
var secondaryApp = initializeApp(config, 'Secondary')

export default {
  data() {
    return {
      allLogs: [],
    }
  },
  mounted() {
    console.log(this.$route.params)
    // console.log(this.$route.params)
    try {
      const db = getDatabase()
      const starCountRef = ref(
        db,
        this.$fire.auth.currentUser.displayName +
          '/logs/' +
          this.$route.params.name
      )
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        this.allLogs = data
        console.log(data)
      })
    } catch (e) {
      console.log(e)
    }
  },
}
</script>