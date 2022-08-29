<template>
    <div class="text-center">
        <h1>Welcome <span v-if="currentUser">{{ currentUser.displayName }}</span></h1>
        <sign-in v-if="!currentUser" />
        <!-- <div>{{ currentUser }}</div> -->
        <div v-if="currentUser">
            <button type="button" class="btn btn-primary" @click="signOut">Sign Out</button>
        </div>
    </div>
</template>
  
<script>

import SignIn from '~/components/SignIn.vue'

export default {
    computed: {
        currentUser() {
            return this.$store.state.user
        }
    },
    methods: {
        signOut() {

            console.log('signOut')
            // this.$fireAuth.signOut()
            this.$fire.auth.signOut()
        }
    },
    components: {
        SignIn
    }
}
</script>
  