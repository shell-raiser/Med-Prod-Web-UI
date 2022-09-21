<template>
    <v-container>
        <h1>NAME HERE</h1>
        <v-container style="padding:20px;">
            <v-card>
                <v-row class="justify-space-around">
                    <span>BP</span>
                    <span>TEMP</span>
                    <span>ECG</span>
                    <span>SPO2</span>
                    <span>Time stamp</span>
                </v-row>
            </v-card>
        </v-container>
    </v-container>
</template>
<script>
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";

var config = {
    apiKey: "AIzaSyB9ahJNsL4sfy4TVlc9jGymrkJPlbbJ0-w",
    authDomain: "hospicare-app22.firebaseapp.com",
    databaseURL: "https://hospicare-app22-default-rtdb.firebaseio.com"
};
var secondaryApp = initializeApp(config, "Secondary");


export default ({
    mounted() {
        try {


            const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');

            const starCountRef =  ref(db, this.$fire.auth.currentUser.displayName+'/logs')
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data)
            });
        }
        catch (e) {
            console.log(e)
        }
    },

    methods: {
        consoleIt() {
            // console.log("clicked");

        }
    },
})
</script>